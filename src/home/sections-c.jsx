// ── SEMEP · Seções C: Equipe · Depoimentos · FAQ · Contato · Footer ───────────

// ── EQUIPE ────────────────────────────────────────────────────────────────────
const TEAM = [
  { name: "Dr. Rômulo Antônio",  role: "Psiquiatra",          reg: "CRM/PB 3442 · RQE 5994", img: "photo-1612349317150-e413f6a5b16d" },
  { name: "Dra. Carla Medeiros", role: "Psicóloga Clínica",   reg: "CRP 13/0847",             img: "photo-1438761681033-6461ffad8d80" },
  { name: "Dr. Felipe Torres",   role: "Psiquiatra Infantil", reg: "CRM/PB 5118 · RQE 7203",  img: "photo-1506794778202-cad84cf45f1d" },
  { name: "Dra. Ana Beatriz",    role: "Fonoaudióloga",       reg: "CRFa/PB 2241",            img: "photo-1544005313-94ddf0286df2" },
  { name: "Dra. Mariana Costa",  role: "Nutricionista",       reg: "CRN/PB 9034",             img: "photo-1494790108377-be9c29b29330" },
  { name: "Dr. Lucas Araújo",    role: "Neuropsicólogo",      reg: "CRP 13/1562",             img: "photo-1472099645785-5658abf4ff4e" },
];

const Equipe = () => (
  <section id="equipe" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader
          badge="🩺 Nossa Equipe"
          title="Profissionais qualificados, atendimento humanizado"
          subtitle="Equipe multidisciplinar com formação sólida, experiência clínica e registro profissional ativo."
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 mb-12">
        {TEAM.map((doc, i) => (
          <div key={doc.name}
               className={`doc-card bg-white rounded-2xl overflow-hidden border border-divider shadow-card reveal reveal-d${(i % 3) + 1}`}
               style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="overflow-hidden bg-[#E8EEF4]">
              <img
                loading="lazy"
                src={`https://images.unsplash.com/${doc.img}?auto=format&fit=crop&w=400&h=440&q=82`}
                alt={doc.name}
                className="w-full h-52 lg:h-64 object-cover object-top"
              />
            </div>
            <div className="p-5">
              <div className="font-serif text-[16px] lg:text-[18px] font-bold text-brand leading-snug mb-0.5">{doc.name}</div>
              <div className="text-txt-sec text-[13px] mb-2">{doc.role}</div>
              <div className="text-brand-light text-[11px] font-semibold tracking-wide uppercase">{doc.reg}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center reveal">
        <NeonBtn href="/equipe" variant="default" size="md">Ver equipe completa</NeonBtn>
      </div>
    </div>
  </section>
);

// ── DEPOIMENTOS ────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { text: "Lugar organizado, amei o atendimento, e Dr Victor é excelente psiquiatra.", author: "Lucila Rossato Sampaio", source: "2 semanas atrás" },
  { text: "Fui atendida pelo Dr. Kayobruce, um excelente profissional! Gostei bastante da consulta. Me senti confortável durante todo o atendimento e consegui falar sobre as coisas que estavam me incomodando. Atendimento muito atencioso 🤍🤍", author: "Ketlin Oliveira", source: "uma semana atrás" },
  { text: "Atendimento muito bom e dr. Rômulo é um médico excelente!", author: "Elisa Ellen", source: "um mês atrás" },
  { text: "Dr Rômulo Antônio. Gostaria de agradecer pelo atendimento de ontem. Foi uma consulta excelente, me senti muito bem acolhida, ouvida e respeitada em todos os momentos. Você explicou tudo com muita clareza e isso me deixou mais tranquila e confiante em relação ao tratamento. Obrigada pela atenção 🥰", author: "Ana Beatriz Cordeiro", source: "um mês atrás" },
];

const FEATURED_TESTIMONIAL = TESTIMONIALS[3];
const COMPACT_TESTIMONIALS = [TESTIMONIALS[0], TESTIMONIALS[2], TESTIMONIALS[1]];

const Depoimentos = () => (
  <section className="py-24 bg-lines">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-[5fr_7fr] gap-10 items-start">

        {/* Left — big rating visual */}
        <div className="relative reveal rounded-3xl overflow-hidden">
          <img
            loading="lazy"
            src="/assets/images/recepcao.webp"
            alt="Recepção SEMEP"
            className="w-full h-[400px] lg:h-[560px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-8 text-white">
            <Stars count={5} size={24} />
            <div className="font-serif text-[56px] font-bold leading-none mt-2">+255</div>
            <div className="text-white/80 text-sm mt-1">avaliações no Google</div>
          </div>
        </div>

        {/* Right — testimonial cards */}
        <div className="reveal reveal-d2">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand mb-6">
            O que dizem nossos pacientes
          </h2>
          <div className="bg-white rounded-2xl p-6 lg:p-7 border border-divider shadow-card hover:shadow-card-lg transition-shadow reveal reveal-d1 mb-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <Stars count={5} size={14} />
              <span className="text-[11px] text-txt-sec">{FEATURED_TESTIMONIAL.source}</span>
            </div>
            <p className="text-txt text-[15px] lg:text-[16px] leading-relaxed italic mb-5">"{FEATURED_TESTIMONIAL.text}"</p>
            <div className="font-semibold text-brand text-sm">— {FEATURED_TESTIMONIAL.author}</div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {COMPACT_TESTIMONIALS.map((t, i) => (
              <div key={i} className={`bg-white rounded-2xl p-4 border border-divider shadow-card hover:shadow-card-lg transition-shadow reveal reveal-d${i+2}`}>
                <Stars count={5} size={12} />
                <p className="text-txt text-[13px] leading-relaxed mt-2 mb-4 italic">"{t.text}"</p>
                <div className="border-t border-divider pt-3">
                  <span className="block font-semibold text-brand text-[12px] leading-snug">— {t.author}</span>
                  <span className="block text-[10px] text-txt-sec mt-1">{t.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  { q: "Como faço para agendar uma consulta na SEMEP?",
    a: "Você pode entrar em contato pelo nosso WhatsApp (83) 3340-3562 ou pelos telefones fixos (83) 3506-4224 ou (83) 3506-4227. Nossa equipe entende sua necessidade, confirma a cobertura do convênio e agenda com o profissional mais adequado." },
  { q: "Quais convênios a SEMEP atende?",
    a: "Para atendimento adulto: Unimed, Geap, SulAmérica, Bradesco Saúde e atendimento particular. Para atendimento infantil: Bradesco Saúde e atendimento particular. A cobertura pode variar por especialidade — confirme conosco antes de agendar." },
  { q: "Qual a diferença entre o atendimento infantil e o adulto?",
    a: "São duas grades distintas. O atendimento infantil contempla especialidades voltadas ao desenvolvimento da criança (ABA para TEA, psicomotricidade, psicopedagogia, terapia ocupacional, terapia alimentar, fonoaudiologia, psicologia e neuropsicologia). O atendimento adulto foca em psiquiatria, psicologia, nutrição e neuropsicologia." },
  { q: "A SEMEP atende crianças com TEA (autismo)?",
    a: "Sim. Trabalhamos com Abordagem ABA para TEA, integrada a outras especialidades como fonoaudiologia, terapia ocupacional e psicopedagogia. Nosso atendimento infantil é estruturado para acolher famílias atípicas com plano terapêutico individualizado." },
  { q: "Vocês oferecem atendimento online?",
    a: "Sim, algumas especialidades possuem modalidade online. Consulte disponibilidade com nossa equipe pelo WhatsApp." },
  { q: "Onde a SEMEP está localizada?",
    a: "Estamos na Avenida Alagoas, 435 — Bairro dos Estados, João Pessoa, PB, CEP 58030-150. Próximo ao Shopping Sebrae." },
  { q: "Qual o horário de atendimento da clínica?",
    a: "Segunda a sexta-feira, das 08h às 18h. Aos sábados e domingos a clínica permanece fechada." },
  { q: "Como funciona o atendimento particular?",
    a: "Para pacientes particulares, os valores variam por especialidade e profissional. Entre em contato pelo WhatsApp para receber a tabela atualizada e informações sobre a primeira consulta." },
];

const FaqItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-divider last:border-0">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="faq-toggle w-full flex items-center justify-between gap-4 py-5 text-left group"
    >
      <span className="font-semibold text-[15px] text-brand group-hover:text-brand-mid transition-colors">{item.q}</span>
      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-brand text-white rotate-45" : "bg-surface text-brand"}`}>
        <Ic.Plus size={15} />
      </span>
    </button>
    <div className={`acc-body ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      <div className="acc-panel">
        <p className="text-txt-sec text-[14px] leading-relaxed pb-5">{item.a}</p>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="reveal">
          <SectionHeader
            badge="❓ Dúvidas Frequentes"
            title="Perguntas frequentes"
            subtitle="Tire suas principais dúvidas antes de entrar em contato."
          />
        </div>
        <div className="reveal bg-white rounded-3xl border border-divider shadow-card px-4 mb-12">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={i} item={item} isOpen={openIdx === i}
                     onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
        <div className="text-center reveal">
          <p className="text-txt-sec text-sm mb-4">Não encontrou sua dúvida?</p>
          <WaButton trackingId="faq__tirar-duvidas" size="lg" message="Olá! Tenho uma dúvida e gostaria de falar com a equipe da SEMEP.">Falar com a equipe da SEMEP</WaButton>
        </div>
      </div>
    </section>
  );
};

// ── CONTATO ────────────────────────────────────────────────────────────────────
const InfoBlock = ({ icon, label, lines }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center flex-shrink-0 mt-0.5">
      <span className="text-brand-light">{icon}</span>
    </div>
    <div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-txt-sec mb-1">{label}</div>
      {lines.map((l, i) => <div key={i} className="text-[14px] text-txt leading-relaxed">{l}</div>)}
    </div>
  </div>
);

const Contato = () => (
  <section id="contato" className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-start">

        {/* Google Maps real */}
        <div className="reveal rounded-3xl overflow-hidden shadow-card" style={{ aspectRatio: "1/1", minHeight: "380px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6552.134045616845!2d-34.856268!3d-7.112324600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd8cbac90589%3A0x6441206d26cbcd61!2sSEMEP%20-%20Sa%C3%BAde%20Mental%20%26%20Bem-Estar!5e1!3m2!1spt-BR!2sbr!4v1779564662754!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: "380px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização SEMEP — Av. Alagoas, 435, João Pessoa/PB"
          />
        </div>

        {/* Info */}
        <div className="reveal reveal-d2">
          <Badge className="bg-brand/10 text-brand mb-5">📍 Estamos Aqui</Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand mb-3">Venha nos conhecer</h2>
          <p className="text-txt-sec text-[15px] leading-relaxed mb-9">
            A SEMEP está em ponto privilegiado de João Pessoa, com fácil acesso e estacionamento na região.
          </p>

          <div className="flex flex-col gap-7 mb-10">
            <InfoBlock icon={<Ic.MapPin size={18} />} label="Endereço" lines={[
              "Av. Alagoas, 435 — Bairro dos Estados",
              "João Pessoa/PB · CEP 58030-150",
              "Referência: próximo ao Shopping Sebrae",
            ]} />
            <InfoBlock icon={<Ic.Phone size={18} />} label="Telefones" lines={[
              "WhatsApp: (83) 3340-3562",
              "(83) 3506-4224 · (83) 3506-4227",
            ]} />
            <InfoBlock icon={<Ic.Clock size={18} />} label="Horário de Atendimento" lines={[
              "Segunda a Sexta · 08h às 18h",
              "Sábados e Domingos · Fechado",
            ]} />

          </div>

          <WaButton trackingId="contato__falar-no-whatsapp" size="lg" block message="Olá! Vim pelo site da SEMEP e gostaria de atendimento.">Falar no WhatsApp agora</WaButton>
        </div>

      </div>
    </div>
  </section>
);

// ── FOOTER ────────────────────────────────────────────────────────────────────
const footerHref = (label) => {
  const key = label.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  return {
    "sobre a semep": "/sobre",
    "atendimento infantil": "/atendimento-infantil",
    "atendimento adulto": "/atendimento-adulto",
    "convenios": "/#convenios",
    "psiquiatria": "/psiquiatria",
    "psicologia": "/psicologia",
    "fonoaudiologia": "/fonoaudiologia",
    "nutricao": "/nutricao",
    "neuropsicologia": "/neuropsicologia",
  }[key] || "/";
};

const Footer = () => (
  <footer className="bg-brand text-white/80">
    <div style={{ lineHeight: 0, background: '#0E2A47' }}>
      <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
        <path d="M0 56L60 46.7C120 37 240 19 360 14C480 9 600 18 720 23.3C840 28 960 28 1080 25.7C1200 23 1320 19 1380 16.7L1440 14V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V56Z" fill="white"/>
      </svg>
    </div>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <SemepBrand href="/" theme="dark" size="footer" className="mb-4" />
          <div className="text-[10px] text-white/50 tracking-widest uppercase mb-5">Saúde Mental &amp; Bem-Estar</div>
          <p className="text-[13px] text-white/60 leading-relaxed mb-5">
            Clínica multidisciplinar de referência em João Pessoa, especializada em saúde mental para crianças, adolescentes e adultos.
          </p>
          <div className="text-[12px] text-white/50">Av. Alagoas, 435 · Bairro dos Estados<br />João Pessoa/PB · CEP 58030-150</div>
        </div>

        {/* Explore */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Explore</div>
          <ul className="space-y-3">
            {["Sobre a SEMEP","Atendimento Infantil","Atendimento Adulto","Convênios"].map(l => (
              <li key={l}><a href={footerHref(l)} className="text-[13px] text-white/65 hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Especialidades */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Especialidades</div>
          <ul className="space-y-3">
            {["Psiquiatria","Psicologia","Fonoaudiologia","Nutrição","Neuropsicologia"].map(l => (
              <li key={l}><a href={footerHref(l)} className="text-[13px] text-white/65 hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">Contato</div>
          <div className="space-y-3">
            <a href={waHref("Olá! Vim pelo site da SEMEP e gostaria de atendimento.")} data-whatsapp-id="rodape__telefone-whatsapp" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-[13px] text-wa hover:text-[#5edc9e] transition-colors">
              <Ic.WhatsApp size={15} /> (83) 3340-3562
            </a>
            <div className="text-[13px] text-white/60">(83) 3506-4224</div>
            <div className="text-[13px] text-white/60">(83) 3506-4227</div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/semepsaudemental/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @semepsaudemental" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Ic.Instagram size={15} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
        <div className="text-[12px] text-white/40">
          © 2026 SEMEP — Saúde Mental &amp; Bem-Estar. Todos os direitos reservados.
          <span className="mx-2">·</span>
          Responsável Técnico: Dr. Rômulo Antônio — CRM/PB 3442
        </div>
        <div className="flex gap-4">
          {[['/politica-de-privacidade','Política de Privacidade'],['/termos-de-uso','Termos de Uso'],['/lgpd','LGPD']].map(([href,label]) => (
            <a key={label} href={href} className="text-[12px] text-white/40 hover:text-white/70 transition-colors">{label}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Equipe, Depoimentos, FAQ, Contato, Footer });
