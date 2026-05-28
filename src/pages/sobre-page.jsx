// ── SEMEP · Página Sobre ──────────────────────────────────────────────────────

const HistoriaSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative reveal">
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img loading="lazy" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=620&h=520&q=82"
                 alt="Clínica SEMEP" className="w-full h-[440px] lg:h-[520px] object-cover" />
          </div>
        </div>
        <div className="reveal reveal-d2">
          <Badge className="bg-brand/10 text-brand mb-5">Nossa Jornada</Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand leading-tight mb-6">
            Cuidando da saúde mental em João Pessoa
          </h2>
          <div className="space-y-4 text-txt-sec text-[15px] leading-relaxed">
            <p>A SEMEP nasceu com o propósito de oferecer atendimento multidisciplinar em saúde mental em João Pessoa. Desde nossos primeiros anos, construímos uma equipe integrada de psicólogos, psiquiatras, fonoaudiólogos, nutricionistas e neuropsicólogos comprometidos com uma única missão: cuidar do paciente como um todo.</p>
            <p>Ao longo dos anos, expandimos nossas especialidades para acolher também o público infantil e adolescente, com grade dedicada incluindo abordagem ABA para TEA, psicomotricidade, terapia ocupacional, psicopedagogia e terapia alimentar.</p>
            <p>Hoje, somos referência regional em saúde mental, com mais de 250 avaliações positivas no Google e uma comunidade de pacientes que confia em nosso trabalho técnico e humanizado.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MVV_CARDS = [
  {
    icon: <Ic.Target size={32} className="text-brand-light" />,
    title: "Missão",
    text: "Oferecer atendimento humanizado e multidisciplinar em saúde mental, promovendo qualidade de vida, equilíbrio emocional e desenvolvimento pleno para crianças, adolescentes e adultos.",
  },
  {
    icon: <Ic.Eye size={32} className="text-brand-light" />,
    title: "Visão",
    text: "Ser referência em saúde mental e bem-estar na Paraíba, reconhecida pela excelência técnica, pelo cuidado humano e pela formação contínua da nossa equipe.",
  },
  {
    icon: <Ic.Heart size={32} className="text-brand-light" />,
    title: "Valores",
    isList: true,
    items: ["Ética","Acolhimento","Multidisciplinaridade","Individualização","Responsabilidade Clínica","Educação Continuada"],
  },
];

const MVVSection = () => (
  <section className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Quem Somos" title="Nossos princípios" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {MVV_CARDS.map((c, i) => (
          <div key={c.title} className={`reveal reveal-d${i+1} bg-white rounded-3xl p-8 shadow-card hover:-translate-y-1 hover:shadow-card-lg transition-all duration-300`}>
            <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-6">{c.icon}</div>
            <h3 className="font-serif text-2xl font-bold text-brand mb-4">{c.title}</h3>
            {c.isList
              ? <ul className="space-y-2">{c.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-txt">
                    <span className="w-5 h-5 rounded-full bg-brand-turq/20 flex items-center justify-center flex-shrink-0">
                      <Ic.Check size={11} className="text-brand-turq" />
                    </span>{item}
                  </li>
                ))}</ul>
              : <p className="text-txt-sec text-[15px] leading-relaxed">{c.text}</p>
            }
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DIFERENCIAIS = [
  { icon: <Ic.UsersRound size={24} />, title: "Equipe Multidisciplinar Integrada", text: "Profissionais de 5 especialidades trabalhando de forma articulada, não isolada. Seu plano terapêutico é construído em equipe." },
  { icon: <Ic.Baby size={24} />,       title: "Atendimento Infantil Especializado", text: "Grade dedicada a crianças e adolescentes, com abordagem ABA para TEA, psicomotricidade, psicopedagogia e mais." },
  { icon: <Ic.ShieldCheck size={24} />, title: "Responsabilidade Técnica", text: "Profissionais com registro profissional ativo (CRM, RQE, CRP, CRFa, CRN), ética clínica e atualização permanente." },
  { icon: <Ic.GraduationCap size={24} />, title: "Compromisso com Atualização", text: "Promovemos o Meeting de Atualização Terapêutica em Saúde Mental, evento anual que reúne profissionais da área." },
];

const DiferenciaisSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Por que a SEMEP" title="O que nos torna diferentes"
          subtitle="Quatro diferenciais que sustentam a confiança de mais de 250 pacientes avaliadores no Google." />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {DIFERENCIAIS.map((d, i) => (
          <div key={d.title} className={`reveal reveal-d${(i%2)+1} flex gap-5 bg-surface rounded-2xl p-7 hover:shadow-card transition-shadow duration-200`}>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-brand-light shadow-card">
              {d.icon}
            </div>
            <div>
              <h3 className="font-serif text-[18px] font-bold text-brand mb-2">{d.title}</h3>
              <p className="text-txt-sec text-[14px] leading-relaxed">{d.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ESPACOS = [
  { img: "photo-1519494026892-80bbd2d6fd0d", caption: "Recepção", h: "h-52" },
  { img: "photo-1576091160399-112ba8d25d1d", caption: "Sala de Atendimento Adulto", h: "h-64" },
  { img: "photo-1536640712-4d4c36ff0e4e", caption: "Sala Infantil", h: "h-52" },
  { img: "photo-1559839914-17aae19cec71", caption: "Sala de Avaliação", h: "h-64" },
  { img: "photo-1551190822-a9333d879b1f", caption: "Sala de Fonoaudiologia", h: "h-52" },
  { img: "photo-1573497019940-1c28c88b4f3e", caption: "Fachada", h: "h-52" },
];

const EspacosSection = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Nossa Estrutura" title="Um ambiente pensado para o seu cuidado"
          subtitle="Salas planejadas para cada especialidade e perfil de paciente." />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ESPACOS.map((e, i) => (
          <div key={i} className={`reveal reveal-d${(i%3)+1}`}>
            <div className={`${e.h} rounded-2xl overflow-hidden`}>
              <img loading="lazy" src={`https://images.unsplash.com/${e.img}?auto=format&fit=crop&w=480&h=400&q=80`}
                   alt={e.caption} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-[12px] text-txt-sec mt-2 ml-1">{e.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EventosSection = () => (
  <section className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal rounded-3xl overflow-hidden shadow-card">
          <img loading="lazy" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=620&h=460&q=80"
               alt="Meeting SEMEP" className="w-full h-[400px] object-cover" />
        </div>
        <div className="reveal reveal-d2">
          <Badge className="bg-brand/10 text-brand mb-5">Eventos</Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand mb-4">
            Compromisso com a atualização científica
          </h2>
          <p className="text-txt-sec text-[15px] leading-relaxed mb-7">
            A SEMEP promove o Meeting de Atualização Terapêutica em Saúde Mental, evento anual que reúne profissionais da área para troca científica, atualização de práticas clínicas e fortalecimento da comunidade.
          </p>
          <div className="bg-white rounded-2xl border border-divider shadow-card p-6 mb-7">
            <div className="text-[11px] font-bold text-brand-light uppercase tracking-widest mb-2">Próximo Evento</div>
            <div className="font-serif text-[18px] font-bold text-brand mb-3">3º Meeting de Atualização Terapêutica em Saúde Mental</div>
            <div className="flex flex-col gap-1.5 text-txt-sec text-[14px]">
              <div className="flex items-center gap-2"><Ic.Clock size={14} className="text-brand-light" />22 de agosto de 2026</div>
              <div className="flex items-center gap-2"><Ic.MapPin size={14} className="text-brand-light" />João Pessoa, PB</div>
            </div>
          </div>
          <NeonBtn href="#contato" variant="default" size="md">Saiba mais sobre o evento</NeonBtn>
        </div>
      </div>
    </div>
  </section>
);

const SobreApp = () => {
  useReveal();
  return (
    <>
      <SharedHeader />
      <CompactHero badge="👥 Nossa História" h1="Mais que uma clínica, um espaço dedicado à sua saúde mental"
        subtitle="Conheça a história, os valores e os profissionais por trás da SEMEP." minH="50vh" />
      <HistoriaSection />
      <MVVSection />
      <DiferenciaisSection />
      <EspacosSection />
      <EventosSection />
      <InnerCTA
        h2="Pronto para iniciar seu atendimento?"
        subtitle="Nossa equipe está disponível para entender sua necessidade e indicar o melhor caminho."
        waMsg="Olá! Vim pelo site da SEMEP e gostaria de conhecer os atendimentos."
        waLabel="Falar no WhatsApp"
        ghostHref="/#especialidades"
        ghostLabel="Ver especialidades"
      />
      <SharedFooter />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<SobreApp />);
