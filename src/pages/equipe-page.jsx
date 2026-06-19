// ── SEMEP · Página Equipe ─────────────────────────────────────────────────────

const TEAM_FULL = [
  { name:'Dr. Rômulo Antônio',     trackingId:'dr-romulo-antonio',     role:'Psiquiatria',            reg:'CRM/PB 3442 · RQE 5994', img:'photo-1612349317150-e413f6a5b16d', publico:['adulto'],            esp:'Psiquiatria',   bio:'Psiquiatra com experiência em transtornos de humor, ansiedade e acompanhamento medicamentoso responsável.' },
  { name:'Dra. Carla Medeiros',    trackingId:'dra-carla-medeiros',    role:'Psicologia Clínica',     reg:'CRP 13/0847',             img:'photo-1438761681033-6461ffad8d80', publico:['infantil','adulto'], esp:'Psicologia',    bio:'Psicóloga com formação em TCC, atua com adultos e crianças em diferentes momentos da vida.' },
  { name:'Dr. Felipe Torres',      trackingId:'dr-felipe-torres',      role:'Psiquiatria Infantil',   reg:'CRM/PB 5118 · RQE 7203',  img:'photo-1506794778202-cad84cf45f1d', publico:['infantil'],          esp:'Psiquiatria',   bio:'Psiquiatra da infância e adolescência, com especialização em TDAH e quadros do desenvolvimento.' },
  { name:'Dra. Ana Beatriz Silva', trackingId:'dra-ana-beatriz-silva', role:'Fonoaudiologia',         reg:'CRFa/PB 2241',            img:'photo-1544005313-94ddf0286df2', publico:['infantil'],          esp:'Fonoaudiologia',bio:'Fonoaudióloga especializada no desenvolvimento infantil da linguagem oral e escrita.' },
  { name:'Dra. Mariana Costa',     trackingId:'dra-mariana-costa',     role:'Nutrição',               reg:'CRN/PB 9034',             img:'photo-1494790108377-be9c29b29330', publico:['adulto'],            esp:'Nutrição',      bio:'Nutricionista com foco em nutrição comportamental e relação alimentação-saúde mental.' },
  { name:'Dr. Lucas Araújo',       trackingId:'dr-lucas-araujo',       role:'Neuropsicologia',        reg:'CRP 13/1562',             img:'photo-1472099645785-5658abf4ff4e', publico:['infantil','adulto'], esp:'Neuropsicologia',bio:'Neuropsicólogo com experiência em avaliação cognitiva de TEA, TDAH e quadros do desenvolvimento.' },
  { name:'Dra. [Psicopedagoga]',   trackingId:'psicopedagogia',        role:'Psicopedagogia',         reg:'CRPP/PB —',               img:'photo-1438761681033-6461ffad8d80', publico:['infantil'],          esp:'Psicopedagogia',bio:'[Bio a confirmar com a clínica]' },
  { name:'Dra. [Terapeuta Ocup.]', trackingId:'terapeuta-ocupacional', role:'Terapia Ocupacional',    reg:'CREFITO/PB —',            img:'photo-1573496359142-b8d87734a5a2', publico:['infantil'],          esp:'ABA',           bio:'[Bio a confirmar com a clínica]' },
  { name:'Dr. [Analista ABA]',     trackingId:'analista-aba',           role:'ABA — Análise do Comp.', reg:'CRP 13/—',               img:'photo-1535713875002-d1d0cf377fde', publico:['infantil'],          esp:'ABA',           bio:'[Bio a confirmar com a clínica]' },
  { name:'Dra. [Psicóloga]',       trackingId:'psicologia-adulto',      role:'Psicologia',             reg:'CRP 13/—',                img:'photo-1607746882042-944635dfe10e', publico:['adulto'],            esp:'Psicologia',    bio:'[Bio a confirmar com a clínica]' },
];

const ESPECIALIDADES_FILTRO = ['Todas','Psiquiatria','Psicologia','Fonoaudiologia','Nutrição','Neuropsicologia','Psicopedagogia','Terapia Ocupacional','ABA'];

const StatsBar = () => (
  <section className="py-12 bg-surface">
    <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { icon:<Ic.Users size={28}/>,        num:'+20',              label:'profissionais' },
          { icon:<Ic.Award size={28}/>,        num:'5',                label:'especialidades' },
          { icon:<Ic.GraduationCap size={28}/>,num:'Formação',         label:'contínua' },
          { icon:<Ic.ShieldCheck size={28}/>,  num:'Registro',         label:'profissional ativo' },
        ].map((s,i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-light shadow-card">{s.icon}</div>
            <div className="font-serif text-[26px] font-bold text-brand leading-none">{s.num}</div>
            <div className="text-txt-sec text-[13px]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FilterPill = ({ label, active, onClick }) => (
  <button onClick={onClick}
    className={`filter-pill px-4 py-2 rounded-full text-[13px] font-semibold border-2 transition-all ${active ? 'bg-brand text-white border-brand active-pill' : 'bg-white text-brand border-divider hover:border-brand-light'}`}>
    {label}
  </button>
);

const EquipeGrid = () => {
  const [publico, setPublico]   = React.useState('todos');
  const [esp,     setEsp]       = React.useState('Todas');

  const filtered = TEAM_FULL.filter(m => {
    const pOk = publico === 'todos' || m.publico.includes(publico);
    const eOk = esp === 'Todas' || m.esp === esp;
    return pOk && eOk;
  });

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-divider shadow-[0_2px_12px_rgba(14,42,71,0.06)] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-[12px] font-bold text-txt-sec uppercase tracking-widest mr-2">Público:</span>
            {[['todos','Todos'],['infantil','Infantil'],['adulto','Adulto']].map(([v,l]) => (
              <FilterPill key={v} label={l} active={publico===v} onClick={() => setPublico(v)} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-bold text-txt-sec uppercase tracking-widest mr-2">Especialidade:</span>
            {ESPECIALIDADES_FILTRO.map(e => (
              <FilterPill key={e} label={e} active={esp===e} onClick={() => setEsp(e)} />
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-txt-sec">Nenhum profissional encontrado com esses filtros.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {filtered.map((doc, i) => (
                <div key={doc.name} className="doc-card bg-white rounded-2xl overflow-hidden border border-divider shadow-card flex flex-col">
                  <div className="bg-[#E8EEF4] overflow-hidden">
                    <img loading="lazy" src={`https://images.unsplash.com/${doc.img}?auto=format&fit=crop&w=360&h=400&q=82`}
                         alt={doc.name} className="w-full h-44 object-cover object-top" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="font-serif text-[14px] font-bold text-brand leading-snug mb-0.5">{doc.name}</div>
                    <div className="text-txt-sec text-[12px] mb-1">{doc.role}</div>
                    <div className="text-brand-light text-[10px] font-semibold tracking-wide uppercase mb-2">{doc.reg}</div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {doc.publico.map(p => (
                        <span key={p} className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p==='infantil' ? 'bg-brand-turq/20 text-brand-mid' : 'bg-brand-mid/15 text-brand-mid'}`}>
                          {p.charAt(0).toUpperCase()+p.slice(1)}
                        </span>
                      ))}
                    </div>
                    <p className="text-txt-sec text-[11px] leading-relaxed mb-3 flex-1">{doc.bio}</p>
                    <NeonBtn trackingId={`profissionais__agendar-${doc.trackingId}`} href={waHref('Olá! Gostaria de agendar com ' + doc.name)} variant="default" size="md" className="text-[11px]">Agendar</NeonBtn>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const QueroFazerParteSection = () => (
  <section className="py-20 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal rounded-3xl overflow-hidden shadow-card">
          <img loading="lazy" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=620&h=420&q=82"
               alt="Equipe SEMEP" className="w-full h-[360px] object-cover" />
        </div>
        <div className="reveal reveal-d2">
          <Badge className="bg-brand/10 text-brand mb-5">Oportunidades</Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand mb-5">Você é profissional? Junte-se à nossa equipe.</h2>
          <p className="text-txt-sec text-[15px] leading-relaxed mb-7">Estamos sempre em busca de profissionais qualificados que compartilhem nosso compromisso com o cuidado humano e técnico em saúde mental.</p>
          <NeonBtn trackingId="oportunidades__enviar-curriculo" href={waHref("Olá! Sou profissional de saúde e gostaria de enviar meu currículo à SEMEP.")} variant="default" size="lg">Enviar currículo</NeonBtn>
        </div>
      </div>
    </div>
  </section>
);

const EquipeApp = () => {
  useReveal();
  return (
    <>
      <SharedHeader />
      <CompactHero badge="🩺 Nossa Equipe" h1="Conheça nossa equipe multidisciplinar"
        subtitle="Profissionais com formação sólida, registro ativo e compromisso com o cuidado humano." minH="40vh" />
      <StatsBar />
      <EquipeGrid />
      <QueroFazerParteSection />
      <InnerCTA h2="Pronto para conversar com nossa equipe?" subtitle="Estamos disponíveis para entender sua necessidade."
        waMsg="Olá! Gostaria de falar com a equipe da SEMEP." waLabel="Falar no WhatsApp" />
      <SharedFooter />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<EquipeApp />);
