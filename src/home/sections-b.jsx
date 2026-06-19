// ── SEMEP · Seções B: TrustBar · Split · Como Funciona · Convênios ───────────

// ── TRUST BAR (marquee, 4 itens) ─────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: "Star", text: "Avaliado no Google" },
  { icon: "MessageCircle", text: "Mais de 250 avaliações reais" },
  { icon: "Baby",        text: "Atendimento Infantil e Adulto integrado" },
  { icon: "ShieldCheck", text: "Profissionais com registro ativo" },
];

const TrustBar = () => {
  const TrustIcon = ({ name }) => {
    const C = Ic[name];
    return C ? <C size={15} /> : null;
  };
  const renderItems = (prefix) =>
    TRUST_ITEMS.map((item, i) => (
      <React.Fragment key={`${prefix}-${i}`}>
        <span className="trust-item">
          <TrustIcon name={item.icon} />
          {item.text}
        </span>
        <span className="trust-sep" aria-hidden="true">·</span>
      </React.Fragment>
    ));
  return (
    <div className="trust-bar" aria-hidden="true">
      <div className="trust-track">
        {renderItems("a")}
        {renderItems("b")}
      </div>
    </div>
  );
};

// ── SPLIT INFANTIL vs. ADULTO ─────────────────────────────────────────────────
const INFANTIL_SPECS = [
  "Abordagem ABA para TEA",
  "Psicomotricidade",
  "Psicologia",
  "Psicopedagogia",
  "Terapia Alimentar",
  "Terapia Ocupacional",
  "Fonoaudiologia",
  "Neuropsicologia",
];
const ADULTO_SPECS = ["Psiquiatria", "Psicologia", "Nutrição", "Neuropsicologia"];

const SpecList = ({ items, color }) => (
  <ul className="space-y-2 mb-6">
    {items.map(item => (
      <li key={item} className="flex items-center gap-3 text-[14px] text-txt">
        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
          color === "turq" ? "bg-brand-turq/20 text-brand-turq" : "bg-brand-mid/15 text-brand-mid"
        }`}>
          <Ic.Check size={11} />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const ConvenioPill = ({ label, color = "default" }) => {
  const cls = color === "turq"
    ? "bg-brand-turq/15 text-brand-mid border-brand-turq/30"
    : "bg-brand-mid/10 text-brand-mid border-brand-mid/20";
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold border ${cls}`}>
      {label}
    </span>
  );
};

const AtendimentoCard = ({ type }) => {
  const isInfantil = type === "infantil";
  return (
    <div className="bg-white rounded-3xl shadow-card flex flex-col overflow-hidden h-full">
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img
          loading="lazy"
          src={
            isInfantil
              ? "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=600&h=300&q=80"
              : "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&h=300&q=80"
          }
          alt={isInfantil ? "Atendimento Infantil" : "Atendimento Adulto"}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isInfantil ? "bg-brand-turq/20" : "bg-brand-mid/25"}`} />
        <div className="absolute bottom-4 left-5">
          <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-white ${
            isInfantil ? "bg-brand-turq" : "bg-brand-mid"
          }`}>
            {isInfantil ? "Infantil e Adolescente" : "Adulto"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 lg:p-8">
        <h3 className="font-serif text-[22px] font-bold text-brand mb-3 leading-snug">
          {isInfantil ? "Atendimento Infantil e Adolescente" : "Atendimento Adulto"}
        </h3>
        <p className="text-txt-sec text-[14px] leading-relaxed mb-6">
          {isInfantil
            ? "Cuidado especializado para o desenvolvimento integral de crianças e adolescentes, com abordagem multidisciplinar."
            : "Cuidado integral para adultos em todas as fases da vida, com equipe especializada em saúde mental, nutrição e funções cognitivas."}
        </p>

        <p className="text-[11px] font-bold uppercase tracking-widest text-txt-sec mb-3">
          Especialidades disponíveis:
        </p>
        <SpecList items={isInfantil ? INFANTIL_SPECS : ADULTO_SPECS} color={isInfantil ? "turq" : "mid"} />

        <p className="text-[11px] font-bold uppercase tracking-widest text-txt-sec mb-3">
          Convênios aceitos:
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {isInfantil
            ? ["Bradesco Saúde", "Particular"].map(c => <ConvenioPill key={c} label={c} color="turq" />)
            : ["Unimed","Geap","SulAmérica","Bradesco Saúde","Particular"].map(c => <ConvenioPill key={c} label={c} />)}
        </div>

        <div className="mt-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <NeonBtn href={isInfantil ? "/atendimento-infantil" : "/atendimento-adulto"} variant="ghost" size="md" block className="text-[13px]">
            {isInfantil ? "Atendimento Infantil" : "Atendimento Adulto"}
          </NeonBtn>
          <WaButton
            block
            className="text-[13px]"
            trackingId={isInfantil ? "publico-infantil__informacoes" : "publico-adulto__informacoes"}
            message={isInfantil
              ? "Olá! Gostaria de informações sobre atendimento infantil e adolescente na SEMEP."
              : "Olá! Gostaria de informações sobre atendimento adulto na SEMEP."}
          >
            Falar no WhatsApp
          </WaButton>
        </div>
      </div>
    </div>
  );
};

const Split = () => (
  <section id="atendimento" className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader
          badge="Para Quem Atendemos"
          title="Dois caminhos, um mesmo cuidado integral"
          subtitle="A SEMEP tem grades de especialidades e convênios específicas para cada fase da vida."
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="reveal reveal-d1"><AtendimentoCard type="infantil" /></div>
        <div className="reveal reveal-d2"><AtendimentoCard type="adulto" /></div>
      </div>
    </div>
  </section>
);

// ── COMO FUNCIONA ──────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    icon: <Ic.MessageCircle size={28} />,
    title: "Entre em contato",
    desc: "Nos envie uma mensagem pelo WhatsApp ou ligue para nossa clínica. Nossa equipe de atendimento está pronta para entender sua necessidade.",
  },
  {
    num: "02",
    icon: <Ic.ClipboardList size={28} />,
    title: "Triagem e direcionamento",
    desc: "Realizamos uma triagem inicial para entender seu caso e indicar o profissional mais adequado, além de confirmar a cobertura do seu convênio.",
  },
  {
    num: "03",
    icon: <Ic.HeartHandshake size={28} />,
    title: "Atendimento humanizado",
    desc: "Você é acolhido por nossa equipe multidisciplinar com escuta ativa, plano individualizado e acompanhamento contínuo.",
  },
];

const ComoFunciona = () => (
  <section className="py-24" style={{ background: '#0E2A47' }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase bg-white/15 text-white mb-5">🧭 Como Funciona</div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">Como iniciar seu atendimento</h2>
          <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">Três etapas simples para começar seu acompanhamento com a SEMEP.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {STEPS.map((s, i) => (
          <div key={s.num}
               className={`reveal reveal-d${i+1} card-dark relative rounded-3xl p-8 border hover:-translate-y-1 transition-all duration-300`}>
            <div className="font-serif text-[72px] font-bold text-white/[0.05] leading-none absolute top-4 right-6 select-none">{s.num}</div>
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-turq mb-6">{s.icon}</div>
            <div className="text-[11px] font-bold text-brand-turq tracking-widest uppercase mb-2">Etapa {s.num}</div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-white/60 text-[14px] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center reveal">
        <WaButton trackingId="como-funciona__iniciar-atendimento" size="lg" message="Olá! Gostaria de iniciar meu atendimento na SEMEP.">Iniciar meu atendimento no WhatsApp</WaButton>
      </div>
    </div>
  </section>
);

// ── CONVÊNIOS ─────────────────────────────────────────────────────────────────
const LOGO_CONVENIOS = ["Unimed", "Geap", "SulAmérica", "Bradesco Saúde"];

const Convenios = () => (
  <section id="convenios" className="py-24 bg-cream">
    <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
      <div className="reveal">
        <SectionHeader
          badge="✓ Convênios"
          title="Atendemos os principais convênios de saúde"
          subtitle="Verificamos sua cobertura antes do agendamento para garantir que você seja atendido sem surpresas."
        />
      </div>

      <div className="reveal flex flex-wrap justify-center gap-4 mb-8">
        {LOGO_CONVENIOS.map(c => (
          <ConvenioLogoCard key={c} name={c} />
        ))}
        <div className="flex-shrink-0 bg-brand border-2 border-brand h-24 w-44 rounded-2xl px-5 py-4 flex flex-col items-center justify-center hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
          <span className="font-serif text-[22px] font-bold text-white leading-tight">Particular</span>
          <span className="text-[11px] text-white/70 font-medium uppercase tracking-wide mt-1">Atendimento</span>
        </div>
      </div>

      <p className="reveal text-txt-sec text-[13px] leading-relaxed max-w-xl mx-auto mb-10">
        A cobertura pode variar entre atendimento infantil e adulto e entre especialidades.
        Recomendamos confirmar antes de agendar.
      </p>

      <div className="reveal">
        <WaButton trackingId="convenios__confirmar-cobertura" size="lg" message="Olá! Gostaria de confirmar a cobertura do meu convênio na SEMEP.">Confirmar minha cobertura no WhatsApp</WaButton>
      </div>
    </div>
  </section>
);

Object.assign(window, { TrustBar, Split, ComoFunciona, Convenios });
