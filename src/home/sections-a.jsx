// ── SEMEP · Seções A: Header (Tubelight) · Hero · Especialidades · Sobre ────

// ── TUBELIGHT NAVBAR ──────────────────────────────────────────────────────────
const Header = () => {
  const [scrolled,     setScrolled]     = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [mobileOpen,   setMobileOpen]   = React.useState(false);

  // Scroll → scrolled state + active section
  React.useEffect(() => {
    const SECTION_IDS = ["especialidades","sobre","atendimento","convenios"];

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const offset = 120;
      // Sort by actual offsetTop so order matches DOM, not array
      const sorted = SECTION_IDS
        .map(id => ({ id, el: document.getElementById(id) }))
        .filter(s => s.el)
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop);

      let current = "";
      for (const { id, el } of sorted) {
        if (el.offsetTop - offset <= y) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.body.style.paddingRight = mobileOpen && scrollbarWidth > 0 ? `${scrollbarWidth}px` : "";
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [mobileOpen]);

  const TlLink = ({ href, id, icon, children, dropdown }) => {
    const [open, setOpen] = React.useState(false);
    const timer = React.useRef(null);
    const isActive = activeSection === id;
    const onEnter = () => { clearTimeout(timer.current); setOpen(true); };
    const onLeave = () => { timer.current = setTimeout(() => setOpen(false), 220); };

    if (dropdown) {
      return (
        <div className="tl-dropdown" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <a href={href} className={`tubelight-link ${isActive ? "tl-active" : ""}`}>
            {icon && React.createElement(icon, { size: 13 })}
            {children}
            <Ic.ChevronDown size={11} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </a>
          {open && (
            <div className="tl-drop-menu" onMouseEnter={onEnter} onMouseLeave={onLeave}>
              {dropdown.map(d => (
                <a key={d.label} href={d.href} className="tl-drop-item">{d.label}</a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <a href={href} className={`tubelight-link ${isActive ? "tl-active" : ""}`}>
        {icon && React.createElement(icon, { size: 13 })}
        {children}
      </a>
    );
  };

  const NAV_ITEMS = [
    { href: "#especialidades", id: "especialidades", icon: Ic.Sparkles, label: "Especialidades",
      dropdown: [
        { href: "/psiquiatria",     label: "Psiquiatria" },
        { href: "/psicologia",      label: "Psicologia" },
        { href: "/fonoaudiologia",  label: "Fonoaudiologia" },
        { href: "/nutricao",        label: "Nutrição" },
        { href: "/neuropsicologia", label: "Neuropsicologia" },
      ] },
    { href: "#sobre",         id: "sobre",         icon: Ic.User,        label: "Sobre" },
    { href: "#atendimento",   id: "atendimento",   icon: Ic.Heart,       label: "Atendimentos",
      dropdown: [{ href: "/atendimento-infantil", label: "Infantil & Adolescente" }, { href: "/atendimento-adulto", label: "Adulto" }] },
    { href: "#convenios",     id: "convenios",     icon: Ic.CheckCircle, label: "Convênios" },
  ];

  const MOBILE_LINKS = [
    ["#especialidades",           "Especialidades"],
    ["#sobre",                    "Sobre"],
    ["#atendimento",              "Atendimentos"],
    ["/atendimento-infantil", "↳ Infantil & Adolescente"],
    ["/atendimento-adulto",   "↳ Adulto"],
    ["#convenios",                "Convênios"],
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav className={`tl-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="tl-inner">

          {/* Logo */}
          <SemepBrand href="/" />

          {/* Tubelight pill — hidden on mobile */}
          <div className="tubelight-pill hidden xl:flex">
            {NAV_ITEMS.map(item => (
              <TlLink key={item.id} href={item.href} id={item.id} icon={item.icon} dropdown={item.dropdown}>
                {item.label}
              </TlLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden xl:block">
              <WaButton trackingId="cabecalho-desktop__agendar" size="md" message="Olá! Vim pelo site da SEMEP e gostaria de agendar uma consulta.">Falar no WhatsApp</WaButton>
            </div>
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 rounded-xl text-brand hover:bg-surface transition-colors"
              aria-label="Abrir menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="7"  x2="21" y2="7"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="17" x2="21" y2="17"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      {mobileOpen && (
        <div className="tl-mobile-overlay">
          {/* Close + logo row */}
          <div className="flex items-center justify-between mb-10">
            <SemepBrand href="/" theme="dark" size="mobile" />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Fechar menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col flex-1">
            {MOBILE_LINKS.map(([href, label]) => (
              <a key={label} href={href}
                 onClick={() => setMobileOpen(false)}
                 className="tl-mobile-link">
                {label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10">
            <WaButton trackingId="menu-mobile__agendar" size="lg" block message="Olá! Vim pelo site da SEMEP e gostaria de agendar uma consulta.">Falar no WhatsApp</WaButton>
          </div>
        </div>
      )}
    </>
  );
};

// ── HERO ──────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="pt-[72px] min-h-[80vh] flex items-center hero-gradient">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">

        {/* Left */}
        <div className="reveal">
          <Badge className="bg-brand text-white mb-7">❤ Saúde Mental &amp; Bem-Estar</Badge>
          <h1
            className="font-serif text-[40px] lg:text-[56px] font-bold text-brand leading-[1.06] mb-6"
            style={{ textWrap: "pretty" }}
          >
            Cuidando da sua saúde mental com{" "}
            <em style={{ color: "#6EC9E0", fontStyle: "italic" }}>excelência</em>{" "}
            multidisciplinar
          </h1>
          <p className="text-txt-sec text-lg leading-relaxed mb-10 max-w-lg">
            Clínica de referência em João Pessoa em psiquiatria, psicologia,
            fonoaudiologia, nutrição e neuropsicologia. Atendimento humanizado
            para crianças, adolescentes e adultos.
          </p>
          <div className="flex flex-wrap gap-4">
            <WaButton trackingId="hero__agendar" size="lg" message="Olá! Gostaria de agendar uma consulta na SEMEP.">Falar no WhatsApp</WaButton>
            <NeonBtn href="#especialidades" variant="ghost" size="lg">
              Nossas especialidades
            </NeonBtn>
          </div>
        </div>

        {/* Right — clean image + single proof card */}
        <div className="relative flex justify-center lg:justify-end reveal reveal-d2">
          {/* Photo — simple rounded card, no blob */}
          <div className="relative z-10">
            <img
              src="/assets/images/hero-semep.jpg"
              alt="Dr. Rômulo Antônio, psiquiatra da SEMEP"
              className="w-full max-w-[380px] lg:w-[400px] h-[420px] lg:h-[480px] object-cover object-top rounded-3xl shadow-card-lg"
            />
          </div>

          {/* Single proof card — bottom left */}
          <div className="absolute bottom-6 -left-4 lg:-left-10 z-20 bg-white rounded-2xl shadow-card-lg px-6 py-4 w-64">
            <Stars count={5} size={14} />
            <div className="flex items-end gap-2 mt-1.5">
              <span className="font-serif text-[28px] font-bold text-brand leading-none">+250</span>
              <span className="text-txt-sec text-[13px] mb-1">avaliações no Google</span>
            </div>
            <div className="text-[11px] text-txt-sec mt-1">★★★★★ · 10 mil seguidores no Instagram</div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ── ESPECIALIDADES ─────────────────────────────────────────────────────────────
const SPECS = [
  { title: "Psiquiatria",     href: "/psiquiatria",     publico: "Apenas Adulto",    publicoCor: "#1E4976", img: "photo-1584515933487-779824d29309",
    desc: "Avaliação diagnóstica e acompanhamento medicamentoso para transtornos mentais.", bullets: ["Transtornos de humor","Ansiedade e pânico","Distúrbios do sono"] },
  { title: "Psicologia",      href: "/psicologia",      publico: "Infantil + Adulto", publicoCor: "#4FB3D9", img: "photo-1573497620053-ea5300f94f21",
    desc: "Psicoterapia individualizada com abordagens validadas para todas as fases da vida.", bullets: ["Crianças, adolescentes e adultos","TCC, psicodinâmica, sistêmica","Acompanhamento contínuo"] },
  { title: "Fonoaudiologia",  href: "/fonoaudiologia",  publico: "Apenas Infantil",  publicoCor: "#6EC9E0", img: "photo-1551190822-a9333d879b1f",
    desc: "Avaliação e tratamento de fala, linguagem, audição e comunicação infantil.", bullets: ["Atraso de fala e linguagem","Dislexia e escrita","Avaliação auditiva"] },
  { title: "Nutrição",        href: "/nutricao",        publico: "Apenas Adulto",    publicoCor: "#1E4976", img: "photo-1490645935967-10de6ba17061",
    desc: "Acompanhamento nutricional integrado à saúde mental, humor, sono e bem-estar.", bullets: ["Nutrição comportamental","Transtornos alimentares","Apoio ao tratamento psiquiátrico"] },
  { title: "Neuropsicologia", href: "/neuropsicologia", publico: "Infantil + Adulto", publicoCor: "#4FB3D9", img: "photo-1559839914-17aae19cec71",
    desc: "Avaliação cognitiva detalhada e reabilitação para crianças e adultos.", bullets: ["TEA e TDAH","Dificuldades de aprendizagem","Diagnóstico diferencial"] },
];

const Especialidades = () => (
  <section id="especialidades" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader
          badge="Nossas Especialidades"
          title="Atendimento integrado por uma equipe que trabalha em conjunto"
          subtitle="Nossa abordagem multidisciplinar garante que todos os aspectos da sua saúde mental sejam cuidados de forma completa e personalizada."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {SPECS.map((s, i) => (
          <div key={s.title}
               className={`reveal reveal-d${(i%3)+1} bg-white rounded-2xl border border-divider shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300 flex flex-col`}>
            <div className="relative h-36 overflow-hidden flex-shrink-0">
              <img loading="lazy" src={`https://images.unsplash.com/${s.img}?auto=format&fit=crop&w=480&h=160&q=78`}
                   alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 left-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wide"
                      style={{ background: s.publicoCor }}>{s.publico}</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h3 className="font-serif text-[18px] font-bold text-brand mb-2">{s.title}</h3>
              <p className="text-txt-sec text-[13px] leading-relaxed mb-3">{s.desc}</p>
              <ul className="space-y-1.5 mb-4 flex-1">
                {s.bullets.map(b => (
                  <li key={b} className="flex items-center gap-2 text-[12px] text-txt">
                    <Ic.Check size={11} className="text-brand-turq flex-shrink-0" />{b}
                  </li>
                ))}
              </ul>
              <a href={s.href} className="text-brand-light text-[13px] font-semibold hover:text-brand transition-colors">Saiba mais →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── SOBRE ─────────────────────────────────────────────────────────────────────
const Sobre = () => (
  <section id="sobre" className="py-24 bg-dots">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — image + hours card */}
        <div className="relative reveal">
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=620&h=520&q=82"
              alt="Equipe SEMEP"
              className="w-full h-[440px] lg:h-[520px] object-cover object-center"
            />
          </div>
          {/* Hours card */}
          <div className="absolute bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl shadow-card-lg p-6 w-60">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center flex-shrink-0">
                <Ic.Clock size={20} className="text-brand-light" />
              </div>
              <div>
                <div className="text-[10px] text-txt-sec font-bold uppercase tracking-widest">Horário de</div>
                <div className="text-sm font-bold text-brand">Atendimento</div>
              </div>
            </div>
            <div className="text-[13px] text-txt-sec font-medium">Segunda a Sexta</div>
            <div className="font-serif text-[28px] font-bold text-brand leading-tight">08h às 18h</div>
          </div>
        </div>

        {/* Right — text */}
        <div className="reveal reveal-d2">
          <Badge className="bg-brand/10 text-brand mb-6">👥 Sobre a SEMEP</Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand leading-tight mb-6">
            Uma clínica de referência em saúde mental em João Pessoa
          </h2>
          <p className="text-txt-sec text-lg leading-relaxed mb-8">
            A SEMEP é uma clínica especializada em saúde mental e bem-estar com atendimento
            humanizado e multidisciplinar para crianças, adolescentes e adultos. Nossa equipe
            reúne psicólogos, psiquiatras, fonoaudiólogos, nutricionistas e neuropsicólogos
            atuando de forma integrada — porque cuidar da saúde mental exige olhar completo.
          </p>

          {/* Google rating */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-divider mb-8">
            <Stars count={5} size={18} />
            <div>
              <div className="font-semibold text-brand text-sm">Avaliado no Google</div>
              <div className="text-[12px] text-txt-sec">Baseado em 255 avaliações</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <NeonBtn href="/sobre" variant="default" size="lg">Saiba mais sobre a SEMEP →</NeonBtn>
            <WaButton trackingId="sobre__informacoes" size="lg" message="Olá! Gostaria de saber mais sobre os atendimentos da SEMEP.">Falar no WhatsApp</WaButton>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Header, Hero, Especialidades, Sobre });
