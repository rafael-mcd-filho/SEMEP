// ── SEMEP · Página Atendimento Infantil ───────────────────────────────────────

const HeroInfantil = () => (
  <section className="pt-[72px] min-h-[60vh] flex items-center bg-gradient-to-b from-surface to-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-7" style={{ background: 'rgba(110,201,224,0.15)', color: '#1E4976' }}>
            👶 Atendimento Infantil
          </div>
          <h1 className="font-serif text-[38px] lg:text-[52px] font-bold text-brand leading-[1.07] mb-5" style={{ textWrap: 'pretty' }}>
            Cuidado especializado para o desenvolvimento integral do seu filho
          </h1>
          <p className="text-txt-sec text-lg leading-relaxed mb-8 max-w-lg">
            Equipe multidisciplinar dedicada a crianças e adolescentes — com abordagem ABA para TEA, psicomotricidade, psicopedagogia e mais.
          </p>
          <div className="flex flex-wrap gap-4">
            <WaButton size="lg" message="Olá! Tenho interesse no atendimento infantil da SEMEP.">Falar no WhatsApp</WaButton>
            <NeonBtn href="#especialidades-infantil" variant="ghost" size="lg">Ver especialidades infantis</NeonBtn>
          </div>
        </div>
        <div className="relative flex justify-center reveal reveal-d2">
          <div className="hero-blob-turq absolute w-[340px] h-[380px] top-4 right-0 hidden lg:block" />
          <div className="relative z-10 lg:mr-4">
            <img loading="lazy" src="/assets/images/hero-semep.jpg"
                 alt="Dr. Rômulo Antônio, psiquiatra da SEMEP" className="w-full max-w-[320px] lg:w-[320px] h-[380px] object-cover object-top rounded-[28px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const INDICACOES_INFANTIL = [
  { icon: 'Brain',         text: 'Diagnóstico ou suspeita de TEA' },
  { icon: 'BookOpen',      text: 'Dificuldades de aprendizagem' },
  { icon: 'MessageCircle', text: 'Atraso de fala e linguagem' },
  { icon: 'Activity',      text: 'Desafios sensoriais ou comportamentais' },
  { icon: 'HeartPulse',    text: 'Ansiedade infantil ou questões emocionais' },
  { icon: 'Utensils',      text: 'Seletividade ou recusa alimentar' },
  { icon: 'Puzzle',        text: 'Avaliação do desenvolvimento' },
  { icon: 'UsersRound',    text: 'Dificuldades de socialização' },
];

const IndicacoesSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Quando Procurar" title="Indicado para crianças e adolescentes que apresentam:" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {INDICACOES_INFANTIL.map((item, i) => {
          const IcComp = Ic[item.icon];
          return (
            <div key={i} className={`indic-card reveal reveal-d${(i%4)+1} flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-divider text-center hover:border-brand-turq cursor-default`}>
              <div className="w-12 h-12 rounded-xl bg-brand-turq/15 flex items-center justify-center text-brand-turq">
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

const AbordagemInfantilSection = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal rounded-3xl overflow-hidden shadow-card">
          <img loading="lazy" src="/assets/images/hero-semep.jpg"
               alt="Dr. Rômulo Antônio, psiquiatra da SEMEP" className="w-full h-[420px] object-cover object-top" />
        </div>
        <div className="reveal reveal-d2">
          <Badge className="bg-brand/10 text-brand mb-5">Nossa Abordagem</Badge>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand mb-8">Plano terapêutico individualizado, equipe integrada</h2>
          <ApproachBlock3 blocks={[
            { icon: <Ic.UsersRound size={20} />, title: "Equipe Integrada", text: "Os profissionais que atendem seu filho conversam entre si. As condutas são alinhadas, não isoladas." },
            { icon: <Ic.Target size={20} />, title: "Plano Individualizado", text: "Cada criança recebe um plano terapêutico baseado em avaliação detalhada — não usamos modelos prontos." },
            { icon: <Ic.MessageSquare size={20} />, title: "Comunicação com a Família", text: "Pais e responsáveis participam ativamente do processo, com devolutivas regulares e orientações práticas." },
          ]} />
        </div>
      </div>
    </div>
  </section>
);

const ESP_INFANTIL = [
  { id: 'aba', title: 'Abordagem ABA para TEA', highlight: true,
    text: 'A Análise do Comportamento Aplicada (ABA) é uma abordagem cientificamente validada para crianças com TEA. Nossa equipe estrutura intervenções individualizadas, focadas em desenvolver habilidades sociais, comunicativas, acadêmicas e de autonomia. Trabalhamos em parceria com a família e a escola.' },
  { title: 'Psicomotricidade',     text: 'Trabalha a relação entre o corpo, o movimento e a cognição. Indicada para crianças com atraso no desenvolvimento motor, dificuldades de coordenação ou questões sensoriais.' },
  { title: 'Psicologia Infantil',  text: 'Atendimento psicoterapêutico voltado a crianças e adolescentes que enfrentam questões emocionais, comportamentais ou de adaptação.' },
  { title: 'Psicopedagogia',       text: 'Acompanhamento de dificuldades de aprendizagem, transtornos como dislexia, TDAH e desafios escolares, com intervenção direta no processo de aprender.' },
  { title: 'Terapia Alimentar',    text: 'Trabalho conjunto entre nutricionista, fonoaudiólogo e psicólogo para crianças com seletividade alimentar, recusa alimentar ou dificuldades na aceitação de alimentos.' },
  { title: 'Terapia Ocupacional',  text: 'Atendimento voltado ao desenvolvimento das atividades de vida diária, integração sensorial, coordenação fina e autonomia.' },
  { title: 'Fonoaudiologia Infantil', text: 'Avaliação e tratamento de atrasos de fala, distúrbios de linguagem, leitura, escrita e audição.' },
  { title: 'Neuropsicologia Infantil', text: 'Avaliação cognitiva detalhada para diagnóstico diferencial de TEA, TDAH, dificuldades de aprendizagem e outros quadros do desenvolvimento.' },
];

const EspecialidadesInfantilSection = () => (
  <section id="especialidades-infantil" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Especialidades" title="8 especialidades dedicadas ao desenvolvimento infantil"
          subtitle="Combinamos diferentes áreas conforme a necessidade de cada criança." />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {ESP_INFANTIL.map((e, i) => (
          <div key={e.title} className={`reveal reveal-d${(i%2)+1} rounded-2xl p-7 border-2 ${e.highlight ? 'border-brand-light bg-brand/[0.02]' : 'border-divider bg-white'} hover:shadow-card transition-shadow duration-200 relative`}>
            {e.highlight && (
              <span className="absolute top-4 right-4 bg-brand-light text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">Mais procurado</span>
            )}
            <h3 className="font-serif text-[19px] font-bold text-brand mb-3">{e.title}</h3>
            <p className="text-txt-sec text-[14px] leading-relaxed mb-4">{e.text}</p>
            {e.highlight && (
              <NeonBtn href={waHref("Olá! Gostaria de informações sobre ABA para TEA na SEMEP.")} variant="default" size="md">Falar sobre ABA</NeonBtn>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ConveniosInfantilSection = () => (
  <section className="py-24 bg-cream">
    <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="✓ Convênios Infantis" title="Convênios aceitos para atendimento infantil"
          subtitle="Verifique a cobertura do seu plano antes do agendamento." />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <ConvenioLogoCard name="Bradesco Saúde" className="reveal" />
      </div>
      <div className="text-center reveal">
        <WaButton size="lg" message="Olá! Gostaria de confirmar a cobertura do meu plano para atendimento infantil na SEMEP.">Confirmar cobertura do meu plano</WaButton>
      </div>
    </div>
  </section>
);

const EQUIPE_INFANTIL = [
  { name: 'Dr. Felipe Torres',        role: 'Psiquiatria Infantil',  reg: 'CRM/PB 5118 · RQE 7203', img: 'photo-1506794778202-cad84cf45f1d' },
  { name: 'Dra. Ana Beatriz Silva',   role: 'Fonoaudiologia',        reg: 'CRFa/PB 2241',            img: 'photo-1544005313-94ddf0286df2' },
  { name: 'Dra. [Psicopedagoga]',     role: 'Psicopedagogia',        reg: 'CRPP/PB —',               img: 'photo-1438761681033-6461ffad8d80' },
  { name: 'Dra. [Terapeuta Ocup.]',   role: 'Terapia Ocupacional',   reg: 'CREFITO/PB —',            img: 'photo-1494790108377-be9c29b29330' },
];

const EquipeInfantilSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Equipe Infantil" title="Profissionais especializados em desenvolvimento infantil"
          subtitle="Equipe com formação específica para crianças e adolescentes." />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        {EQUIPE_INFANTIL.map((doc, i) => (
          <div key={doc.name} className={`reveal reveal-d${i+1}`}><SharedDoctorCard doc={doc} /></div>
        ))}
      </div>
      <div className="text-center reveal">
        <NeonBtn href="/equipe" variant="default" size="md">Ver equipe completa</NeonBtn>
      </div>
    </div>
  </section>
);

const FAQ_INFANTIL = [
  { q: 'Meu filho tem diagnóstico de TEA. Como funciona o atendimento na SEMEP?',
    a: 'Trabalhamos com Abordagem ABA estruturada, integrada com fonoaudiologia, terapia ocupacional, psicopedagogia e neuropsicologia conforme necessidade. Começamos por uma avaliação detalhada para construir o plano terapêutico individualizado, em parceria com a família.' },
  { q: 'Como funciona a primeira avaliação?',
    a: 'A primeira consulta é com profissional indicado conforme o motivo da procura (psicólogo, psiquiatra ou neuropsicólogo, dependendo do caso). Após a avaliação inicial, indicamos o plano terapêutico e as especialidades envolvidas.' },
  { q: 'Vocês emitem laudo para escola, INSS ou perícia?',
    a: 'Sim. Após avaliação completa, emitimos laudos técnicos com fundamentação clínica para uso escolar, previdenciário ou jurídico, conforme demanda.' },
  { q: 'Qual a frequência das sessões para crianças com TEA?',
    a: 'Varia por caso. Geralmente recomendamos múltiplas sessões semanais para abordagem ABA intensiva, podendo ser combinadas com outras terapias. A frequência é definida na avaliação inicial.' },
  { q: 'Os pais participam das sessões?',
    a: 'Sim, com regularidade. Realizamos devolutivas periódicas, orientação parental e momentos onde a família é convidada para a sessão. A participação ativa da família potencializa os resultados.' },
  { q: 'Vocês aceitam convênio para atendimento infantil?',
    a: 'Atendemos Bradesco Saúde e particular para o público infantil. A cobertura varia por especialidade e categoria do plano. Recomendamos confirmar antes do agendamento.' },
];

const InfantilCTASection = () => (
  <section className="py-24" style={{ background: 'linear-gradient(135deg, #6EC9E0, #4FB3D9)' }}>
    <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Pronto para conversar com nossa equipe?</h2>
          <p className="text-white/85 text-lg leading-relaxed">Tire suas dúvidas e entenda como podemos ajudar o desenvolvimento do seu filho.</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-card-lg flex flex-col items-center gap-4">
          <WaButton size="lg" block message="Olá! Gostaria de falar com a equipe infantil da SEMEP.">Falar com a equipe infantil</WaButton>
          <p className="text-txt-sec text-[13px]">Resposta em horário comercial</p>
        </div>
      </div>
    </div>
  </section>
);

const InfantilApp = () => {
  useReveal();
  return (
    <>
      <SharedHeader />
      <HeroInfantil />
      <IndicacoesSection />
      <AbordagemInfantilSection />
      <EspecialidadesInfantilSection />
      <SharedFaqSection badge="Dúvidas de Famílias" title="Perguntas frequentes sobre atendimento infantil" items={FAQ_INFANTIL} bg="surface" waMsg="Olá! Tenho dúvidas sobre o atendimento infantil da SEMEP." waLabel="Falar com a equipe" />
      <InfantilCTASection />
      <SharedFooter />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<InfantilApp />);
