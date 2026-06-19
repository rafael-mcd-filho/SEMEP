// ── SEMEP · Página Atendimento Adulto ────────────────────────────────────────

const HeroAdulto = () => (
  <section className="pt-[72px] min-h-[60vh] flex items-center bg-gradient-to-b from-surface to-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-7"
               style={{ background: 'rgba(30,73,118,0.12)', color: '#1E4976' }}>
            Atendimento Adulto
          </div>
          <h1 className="font-serif text-[38px] lg:text-[52px] font-bold text-brand leading-[1.07] mb-5" style={{ textWrap: 'pretty' }}>
            Cuidado integral para a sua saúde mental em todas as fases da vida
          </h1>
          <p className="text-txt-sec text-lg leading-relaxed mb-8 max-w-lg">
            Psiquiatria, psicologia, nutrição e neuropsicologia — equipe especializada para acolher o adulto em sua complexidade.
          </p>
          <div className="flex flex-wrap gap-4">
            <WaButton trackingId="hero__agendar" size="lg" message="Olá! Tenho interesse no atendimento adulto da SEMEP.">Falar no WhatsApp</WaButton>
            <NeonBtn href="#especialidades-adulto" variant="ghost" size="lg">Ver especialidades adultas</NeonBtn>
          </div>
        </div>
        <div className="relative flex justify-center reveal reveal-d2">
          <div className="hero-blob-mid absolute w-[340px] h-[380px] top-4 right-0 hidden lg:block" />
          <div className="relative z-10 lg:mr-4">
            <img loading="lazy" src="/assets/images/hero-semep.jpg"
                 alt="Dr. Rômulo Antônio, psiquiatra da SEMEP" className="w-full max-w-[320px] lg:w-[320px] h-[380px] object-cover object-top rounded-[28px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const INDICACOES_ADULTO = [
  { icon: 'Activity',   text: 'Ansiedade, estresse, burnout' },
  { icon: 'CloudRain',  text: 'Depressão e transtornos de humor' },
  { icon: 'Users',      text: 'Dificuldades em relacionamentos' },
  { icon: 'Pill',       text: 'Necessidade de acompanhamento psiquiátrico' },
  { icon: 'Brain',      text: 'Suspeita de TDAH adulto ou queixas cognitivas' },
  { icon: 'Apple',      text: 'Acompanhamento nutricional integrado' },
];

const IndicacoesAdultoSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Quando Procurar" title="Indicado para adultos que vivem:" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {INDICACOES_ADULTO.map((item, i) => {
          const IcComp = Ic[item.icon];
          return (
            <div key={i} className={`indic-card reveal reveal-d${(i%3)+1} flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-divider text-center hover:border-brand-mid cursor-default`}>
              <div className="w-12 h-12 rounded-xl bg-brand-mid/10 flex items-center justify-center text-brand-mid">
                {IcComp && <IcComp size={22} />}
              </div>
              <p className="text-[13px] font-semibold text-brand leading-snug">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const AbordagemAdultoSection = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal rounded-3xl overflow-hidden shadow-card">
          <img loading="lazy" src="/assets/images/hero-semep.jpg"
               alt="Dr. Rômulo Antônio, psiquiatra da SEMEP" className="w-full h-[420px] object-cover object-top" />
        </div>
        <div className="reveal reveal-d2">
          <Badge className="bg-brand/10 text-brand mb-5">Nossa Abordagem</Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand mb-8">Plano individualizado, equipe integrada</h2>
          <ApproachBlock3 blocks={[
            { icon: <Ic.UsersRound size={20} />, title: "Equipe Integrada", text: "Profissionais conversam entre si. Condutas alinhadas em vez de isoladas." },
            { icon: <Ic.ShieldCheck size={20} />, title: "Ética Clínica", text: "Condutas técnicas com responsabilidade clínica e registro ativo." },
            { icon: <Ic.Target size={20} />, title: "Plano Individualizado", text: "Tratamento baseado em avaliação detalhada — não usamos protocolos prontos." },
          ]} />
        </div>
      </div>
    </div>
  </section>
);

const ESP_ADULTO = [
  { title: 'Psiquiatria', text: 'Avaliação diagnóstica, prescrição responsável e acompanhamento medicamentoso para transtornos de humor, ansiedade, sono e demais condições. Equipe com RQE — Registro de Qualificação de Especialista.' },
  { title: 'Psicologia', text: 'Psicoterapia individualizada com abordagens validadas (TCC, psicodinâmica, sistêmica, conforme indicação). Acompanhamento de questões emocionais, comportamentais e existenciais.' },
  { title: 'Nutrição', text: 'Acompanhamento nutricional integrado à saúde mental — abordagem da relação entre alimentação, humor, sono e bem-estar. Útil em transtornos alimentares, ansiedade e acompanhamento psiquiátrico.' },
  { title: 'Neuropsicologia', text: 'Avaliação cognitiva detalhada (memória, atenção, funções executivas), diagnóstico diferencial e reabilitação para adultos com queixas cognitivas, TDAH adulto ou suspeita de quadros neurodegenerativos.' },
];

const EspecialidadesAdultoSection = () => (
  <section id="especialidades-adulto" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Especialidades" title="4 especialidades para o adulto" />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {ESP_ADULTO.map((e, i) => (
          <div key={e.title} className={`reveal reveal-d${(i%2)+1} rounded-2xl p-7 border-2 border-divider bg-white hover:shadow-card hover:border-brand-mid transition-all duration-200`}>
            <h3 className="font-serif text-[20px] font-bold text-brand mb-3">{e.title}</h3>
            <p className="text-txt-sec text-[14px] leading-relaxed">{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CONVENIOS_ADULTO = ['Unimed','Geap','SulAmérica','Bradesco Saúde'];

const ConveniosAdultoSection = () => (
  <section className="py-24 bg-cream">
    <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
      <div className="reveal">
        <SectionHeader badge="✓ Convênios Adultos" title="Convênios aceitos para atendimento adulto" />
      </div>
      <div className="spec-scroll flex flex-wrap gap-4 pb-2 mb-8 justify-center">
        {CONVENIOS_ADULTO.map((c, i) => (
          <ConvenioLogoCard key={c} name={c} className={`reveal reveal-d${i+1}`} />
        ))}
      </div>
      <p className="text-txt-sec text-[13px] mb-8 max-w-xl mx-auto">A cobertura pode variar por categoria do plano e especialidade. Algumas especialidades podem requerer encaminhamento.</p>
      <div className="reveal">
        <WaButton trackingId="convenios__confirmar-cobertura" size="lg" message="Olá! Gostaria de confirmar a cobertura do meu plano para atendimento adulto na SEMEP.">Confirmar cobertura do meu plano</WaButton>
      </div>
    </div>
  </section>
);

const EQUIPE_ADULTO = [
  { name: 'Dr. Rômulo Antônio',  role: 'Psiquiatra',          reg: 'CRM/PB 3442 · RQE 5994', img: 'photo-1612349317150-e413f6a5b16d' },
  { name: 'Dra. Carla Medeiros', role: 'Psicologia Clínica',  reg: 'CRP 13/0847',             img: 'photo-1438761681033-6461ffad8d80' },
  { name: 'Dra. Mariana Costa',  role: 'Nutrição',            reg: 'CRN/PB 9034',             img: 'photo-1494790108377-be9c29b29330' },
  { name: 'Dr. Lucas Araújo',    role: 'Neuropsicologia',     reg: 'CRP 13/1562',             img: 'photo-1472099645785-5658abf4ff4e' },
];

const EquipeAdultoSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Equipe Adulta" title="Profissionais especializados em saúde mental do adulto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {EQUIPE_ADULTO.map((doc, i) => (
          <div key={doc.name} className={`reveal reveal-d${i+1}`}><SharedDoctorCard doc={doc} /></div>
        ))}
      </div>
      <div className="text-center reveal">
        <NeonBtn href="/equipe" variant="default" size="md">Ver equipe completa</NeonBtn>
      </div>
    </div>
  </section>
);

const FAQ_ADULTO = [
  { q: 'Vocês atendem urgência psiquiátrica?', a: 'Não realizamos atendimento de urgência. Para casos urgentes, recomendamos procurar serviço de emergência hospitalar. Para acompanhamento regular, agende com nossa equipe.' },
  { q: 'Vocês oferecem atendimento online?', a: 'Algumas especialidades possuem modalidade online, dependendo do caso e do profissional. Consulte disponibilidade pelo WhatsApp.' },
  { q: 'Quanto tempo dura uma consulta psiquiátrica?', a: 'A primeira consulta dura cerca de 50-60 minutos. As consultas de retorno, em torno de 30-40 minutos, dependendo do caso.' },
  { q: 'Vocês emitem atestado e laudo?', a: 'Sim. Atestados, laudos e relatórios são emitidos conforme avaliação clínica, com responsabilidade técnica.' },
  { q: 'Como funciona o atendimento neuropsicológico?', a: 'Geralmente envolve 3-5 sessões de avaliação (testes, entrevistas, anamnese) seguidas de devolutiva com laudo. A duração total varia conforme o objetivo.' },
  { q: 'Posso combinar psicologia + psiquiatria?', a: 'Sim, e em muitos casos é recomendado. Nossa equipe alinha as condutas entre as especialidades para um cuidado integrado.' },
];

const AdultoApp = () => {
  useReveal();
  return (
    <>
      <SharedHeader />
      <HeroAdulto />
      <IndicacoesAdultoSection />
      <AbordagemAdultoSection />
      <EspecialidadesAdultoSection />
      <SharedFaqSection badge="Dúvidas Frequentes" title="Perguntas sobre atendimento adulto" items={FAQ_ADULTO} bg="surface" waMsg="Olá! Tenho dúvidas sobre o atendimento adulto da SEMEP." waLabel="Falar com a equipe" />
      <InnerCTA h2="Vamos conversar?" subtitle="Nossa equipe está disponível para entender sua necessidade."
        waMsg="Olá! Gostaria de iniciar atendimento adulto na SEMEP." waLabel="Iniciar atendimento adulto"
        from="#1E4976" to="#0E2A47" />
      <SharedFooter />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AdultoApp />);
