// ── SEMEP · Template de Subpágina de Especialidade ───────────────────────────
// Lê window.SEMEP_ESP para selecionar o config correto

const CONFIGS = {
  psiquiatria: {
    nome: 'Psiquiatria', tagColor: '#1E4976', tagLabel: 'PSIQUIATRIA', blobClass: 'hero-blob-mid',
    descCurta: 'Avaliação diagnóstica e tratamento medicamentoso responsável para adultos.',
    heroImg: 'photo-1584515933487-779824d29309',
    breadcrumb: [{ href:'/', label:'Home'},{href:'/#especialidades',label:'Especialidades'},{label:'Psiquiatria'}],
    oQueE: 'A Psiquiatria é a especialidade médica que diagnostica, trata e previne transtornos mentais e comportamentais. O psiquiatra é o médico habilitado a prescrever medicação quando indicada e a acompanhar quadros como depressão, ansiedade, transtornos bipolares, do sono e outras condições. Na SEMEP, o atendimento psiquiátrico é realizado por médico com RQE — Registro de Qualificação de Especialista.',
    quando: ['Activity:Variações de humor frequentes e intensas','Moon:Distúrbios persistentes de sono','CloudRain:Depressão e tristeza prolongada','Zap:Ansiedade e crises de pânico','Users:Histórico familiar de transtornos','AlertTriangle:Ideação suicida ou pensamentos difíceis'],
    profissionais: [
      { name:'Dr. Rômulo Antônio', role:'Psiquiatra', reg:'CRM/PB 3442 · RQE 5994', img:'photo-1612349317150-e413f6a5b16d' },
    ],
    convenios: ['Unimed','Geap','SulAmérica','Bradesco Saúde','Particular'],
    faq: [
      { q:'A consulta psiquiátrica sempre termina com receita?', a:'Não. O psiquiatra avalia o quadro e indica o tratamento mais adequado, que pode ou não envolver medicação. Em muitos casos, o tratamento é combinado com psicoterapia.' },
      { q:'Por quanto tempo terei que tomar medicação?', a:'O tempo varia conforme o quadro e a resposta ao tratamento. Algumas situações exigem tratamento de curto prazo; outras, acompanhamento mais longo. Tudo é avaliado caso a caso.' },
      { q:'Vocês fazem consulta online?', a:'Algumas consultas podem ser realizadas online. Consulte disponibilidade pelo WhatsApp.' },
      { q:'A SEMEP faz internação psiquiátrica?', a:'Não realizamos internação. Em casos que requerem internação, encaminhamos para serviço hospitalar especializado.' },
    ],
    ctaMsg: 'Olá! Gostaria de informações sobre atendimento de Psiquiatria na SEMEP.',
  },
  psicologia: {
    nome: 'Psicologia', tagColor: '#4FB3D9', tagLabel: 'PSICOLOGIA', blobClass: 'hero-blob',
    descCurta: 'Psicoterapia individualizada para crianças, adolescentes e adultos.',
    heroImg: 'photo-1573497019940-1c28c88b4f3e',
    breadcrumb: [{href:'/',label:'Home'},{href:'/#especialidades',label:'Especialidades'},{label:'Psicologia'}],
    oQueE: 'A Psicologia trabalha o funcionamento mental, emocional e comportamental ao longo da vida. A psicoterapia oferece um espaço para refletir, compreender e ressignificar experiências, com abordagens cientificamente validadas. Nossa equipe atende diferentes faixas etárias e atua em parceria com outras especialidades quando indicado.',
    quando: ['CloudRain:Tristeza, ansiedade ou luto','UsersRound:Dificuldades em relacionamentos','Activity:Estresse, burnout, esgotamento','BookOpen:Apoio em momentos de transição','Shield:Trauma ou eventos difíceis','Search:Autoconhecimento e desenvolvimento pessoal'],
    profissionais: [
      { name:'Dra. Carla Medeiros', role:'Psicologia Clínica', reg:'CRP 13/0847', img:'photo-1438761681033-6461ffad8d80' },
    ],
    convenios: ['Unimed','Geap','SulAmérica','Bradesco Saúde','Particular'],
    faq: [
      { q:'Qual a diferença entre psicólogo e psiquiatra?', a:'O psicólogo realiza psicoterapia (trabalho com a linguagem, emoções e comportamento). O psiquiatra é médico e pode prescrever medicação. Os dois trabalhos são complementares.' },
      { q:'Quantas sessões serão necessárias?', a:'Depende do caso e da abordagem. Algumas demandas resolvem-se em poucas sessões; outras seguem como acompanhamento mais longo. Discutimos isso desde a primeira consulta.' },
      { q:'Atendem crianças?', a:'Sim, temos psicólogas especializadas em atendimento infantil e adolescente.' },
      { q:'As sessões são semanais?', a:'Geralmente sim. Mas a frequência é definida em conjunto com o profissional.' },
    ],
    ctaMsg: 'Olá! Gostaria de informações sobre Psicologia na SEMEP.',
  },
  fonoaudiologia: {
    nome: 'Fonoaudiologia', tagColor: '#6EC9E0', tagLabel: 'FONOAUDIOLOGIA', blobClass: 'hero-blob-turq',
    descCurta: 'Avaliação e tratamento de fala, linguagem, audição e comunicação infantil.',
    heroImg: 'photo-1551190822-a9333d879b1f',
    breadcrumb: [{href:'/',label:'Home'},{href:'/#especialidades',label:'Especialidades'},{label:'Fonoaudiologia'}],
    oQueE: 'A Fonoaudiologia avalia, diagnostica e trata distúrbios de fala, linguagem oral e escrita, audição e funções relacionadas à comunicação. Na SEMEP, focamos no público infantil, com atuação em parceria com terapia ocupacional, psicopedagogia e psicologia conforme necessário.',
    quando: ['MessageCircle:Atraso na fala','BookOpen:Trocas de letras na fala ou escrita','Ear:Suspeita de dificuldade auditiva','Search:Dislexia ou dificuldades de leitura','Activity:Gagueira ou distúrbio da fluência','Users:Dificuldades de compreensão verbal'],
    profissionais: [
      { name:'Dra. Ana Beatriz Silva', role:'Fonoaudiologia', reg:'CRFa/PB 2241', img:'photo-1544005313-94ddf0286df2' },
    ],
    convenios: ['Bradesco Saúde','Particular'],
    faq: [
      { q:'Com que idade meu filho deve começar a falar?', a:'A maioria das crianças produz palavras simples por volta dos 12 meses e frases curtas aos 2 anos. Variações são normais, mas vale avaliar se houver atraso significativo.' },
      { q:'Quanto tempo dura o tratamento fonoaudiológico?', a:'Depende do caso. Alguns quadros resolvem em meses; outros requerem acompanhamento mais longo.' },
      { q:'Atendem adultos?', a:'Atualmente focamos no público infantil. Para adultos com queixa fonoaudiológica, podemos indicar parceiros.' },
      { q:'O tratamento substitui a escola?', a:'Não. Trabalhamos em parceria com a escola, com orientações específicas conforme o caso.' },
    ],
    ctaMsg: 'Olá! Gostaria de informações sobre Fonoaudiologia na SEMEP.',
  },
  nutricao: {
    nome: 'Nutrição', tagColor: '#1E4976', tagLabel: 'NUTRIÇÃO', blobClass: 'hero-blob-mid',
    descCurta: 'Nutrição integrada à saúde mental para adultos.',
    heroImg: 'photo-1490645935967-10de6ba17061',
    breadcrumb: [{href:'/',label:'Home'},{href:'/#especialidades',label:'Especialidades'},{label:'Nutrição'}],
    oQueE: 'A Nutrição na SEMEP é integrada à saúde mental — entendemos que a relação entre alimentação, humor, sono e bem-estar é direta. Atuamos especialmente em casos onde questões emocionais influenciam a alimentação, ou em apoio ao tratamento psiquiátrico.',
    quando: ['Utensils:Transtornos alimentares (anorexia, bulimia, compulsão)','Scale:Ganho ou perda de peso ligados a fatores emocionais','Pill:Acompanhamento de medicação psiquiátrica','Activity:Ansiedade alimentar','Heart:Reeducação alimentar com base comportamental'],
    profissionais: [
      { name:'Dra. Mariana Costa', role:'Nutrição', reg:'CRN/PB 9034', img:'photo-1494790108377-be9c29b29330' },
    ],
    convenios: ['Unimed','Geap','SulAmérica','Bradesco Saúde','Particular'],
    faq: [
      { q:'A consulta nutricional foca em emagrecimento?', a:'Não necessariamente. Nosso foco é a relação entre alimentação e saúde mental, não a estética.' },
      { q:'Trabalham com transtornos alimentares?', a:'Sim, em conjunto com psicólogo e psiquiatra para acompanhamento integrado.' },
      { q:'Quanto tempo de acompanhamento?', a:'Varia conforme a meta e o quadro. Definimos juntos na primeira consulta.' },
      { q:'Vocês prescrevem dietas restritivas?', a:'Não trabalhamos com dietas restritivas padronizadas. Cada plano é individualizado.' },
    ],
    ctaMsg: 'Olá! Gostaria de informações sobre Nutrição na SEMEP.',
  },
  neuropsicologia: {
    nome: 'Neuropsicologia', tagColor: '#4FB3D9', tagLabel: 'NEUROPSICOLOGIA', blobClass: 'hero-blob',
    descCurta: 'Avaliação cognitiva detalhada para crianças e adultos.',
    heroImg: 'photo-1559839914-17aae19cec71',
    breadcrumb: [{href:'/',label:'Home'},{href:'/#especialidades',label:'Especialidades'},{label:'Neuropsicologia'}],
    oQueE: 'A Neuropsicologia avalia o funcionamento cognitivo (memória, atenção, linguagem, funções executivas) através de testes padronizados. É indicada para diagnóstico diferencial de TEA, TDAH, dificuldades de aprendizagem, e acompanhamento de quadros do desenvolvimento ou neurológicos.',
    quando: ['Brain:Suspeita de TEA (infantil ou adulto)','Zap:Suspeita de TDAH','BookOpen:Dificuldades de aprendizagem','Search:Queixas de memória ou atenção','Activity:Avaliação pré-aposentadoria ou jurídica','HeartPulse:Pós-AVC ou quadros neurodegenerativos'],
    profissionais: [
      { name:'Dr. Lucas Araújo', role:'Neuropsicologia', reg:'CRP 13/1562', img:'photo-1472099645785-5658abf4ff4e' },
    ],
    convenios: ['Bradesco Saúde','Particular'],
    faq: [
      { q:'Quanto tempo dura uma avaliação neuropsicológica?', a:'Geralmente 3 a 5 sessões de testes e entrevistas, seguidas de devolutiva com laudo. O processo todo leva algumas semanas.' },
      { q:'Quando devo procurar avaliação para meu filho?', a:'Quando houver queixas escolares persistentes, sinais sugestivos de TEA/TDAH, ou para diagnóstico diferencial recomendado por outro profissional.' },
      { q:'A avaliação serve para laudo?', a:'Sim. Após a avaliação, emitimos laudo neuropsicológico técnico para uso escolar, médico ou jurídico.' },
      { q:'O resultado é definitivo?', a:'O laudo neuropsicológico é uma fotografia do momento. Em algumas situações, recomenda-se reavaliação periódica.' },
    ],
    ctaMsg: 'Olá! Gostaria de informações sobre Neuropsicologia na SEMEP.',
  },
};

const cfg = CONFIGS[window.SEMEP_ESP] || CONFIGS.psiquiatria;

// ── Hero ─────────────────────────────────────────────────────────────────────
const EspHero = () => (
  <section className="pt-[72px] min-h-[50vh] flex items-center bg-gradient-to-b from-surface to-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 text-white"
               style={{ background: cfg.tagColor }}>{cfg.tagLabel}</div>
          <h1 className="font-serif text-[36px] lg:text-[50px] font-bold text-brand leading-tight mb-5">{cfg.nome} em João Pessoa</h1>
          <p className="text-txt-sec text-lg leading-relaxed mb-8 max-w-lg">{cfg.descCurta}</p>
          <div className="flex flex-wrap gap-4">
            <WaButton trackingId="hero__agendar" size="lg" message={cfg.ctaMsg}>Falar no WhatsApp</WaButton>
          </div>
        </div>
        <div className="relative flex justify-center reveal reveal-d2">
          <div className={`${cfg.blobClass} absolute w-[300px] h-[340px] top-4 right-0 hidden lg:block`} />
          <div className="relative z-10 lg:mr-4">
            <img loading="lazy" src="/assets/images/hero-semep.jpg"
                 alt={`Dr. Rômulo Antônio, psiquiatra da SEMEP - ${cfg.nome}`} className="w-full max-w-[300px] lg:w-[300px] h-[360px] object-cover object-top rounded-[28px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── O que é ──────────────────────────────────────────────────────────────────
const OQueESection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">
        <div className="reveal">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand leading-tight">O que é {cfg.nome}?</h2>
        </div>
        <div className="reveal reveal-d2">
          <p className="text-txt-sec text-[16px] leading-relaxed">{cfg.oQueE}</p>
        </div>
      </div>
    </div>
  </section>
);

// ── Quando procurar ──────────────────────────────────────────────────────────
const QuandoProcurarSection = () => (
  <section className="py-20 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Quando Procurar" title="Indicado em casos como:" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cfg.quando.map((item, i) => {
          const [iconName, text] = item.split(':');
          const IcComp = Ic[iconName];
          return (
            <div key={i} className={`indic-card reveal reveal-d${(i%3)+1} flex items-center gap-3 p-5 rounded-2xl border-2 border-divider bg-white hover:border-brand-light cursor-default`}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-light" style={{ background: 'rgba(79,179,217,0.12)' }}>
                {IcComp && <IcComp size={20} />}
              </div>
              <p className="text-[13px] font-semibold text-brand leading-snug">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// ── Como atendemos ───────────────────────────────────────────────────────────
const ComoAtendemos = () => (
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Nossa Abordagem" title={`Como atendemos ${cfg.nome} na SEMEP`} />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon:<Ic.Target size={24}/>, title:'Avaliação detalhada', text:'Cada paciente passa por avaliação inicial antes de iniciar o tratamento.' },
          { icon:<Ic.Users size={24}/>, title:'Equipe integrada', text:'Trabalho em conjunto com outras especialidades quando indicado.' },
          { icon:<Ic.ShieldCheck size={24}/>, title:'Ética clínica', text:'Condutas técnicas com responsabilidade e registro ativo.' },
        ].map((b, i) => (
          <div key={i} className={`reveal reveal-d${i+1} flex flex-col items-start gap-4 p-7 bg-surface rounded-2xl`}>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-light shadow-card">{b.icon}</div>
            <div>
              <div className="font-semibold text-brand text-[16px] mb-1">{b.title}</div>
              <p className="text-txt-sec text-[14px] leading-relaxed">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Profissionais ────────────────────────────────────────────────────────────
const ProfissionaisSection = () => (
  <section id="profissionais" className="py-20 bg-surface">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="reveal">
        <SectionHeader badge="Profissionais" title={`Quem atende ${cfg.nome} na SEMEP`} />
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {cfg.profissionais.map((doc, i) => (
          <div key={doc.name} className={`reveal reveal-d${i+1} w-full max-w-[240px]`}>
            <SharedDoctorCard doc={doc} />
          </div>
        ))}
      </div>
      <div className="text-center reveal">
        <NeonBtn href="/equipe" variant="default" size="md">Ver equipe completa</NeonBtn>
      </div>
    </div>
  </section>
);

// ── Convênios ────────────────────────────────────────────────────────────────
const ConveniosEspSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <div className="reveal">
        <SectionHeader badge="✓ Convênios" title={`Convênios que cobrem ${cfg.nome}`} />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-8 reveal">
        {cfg.convenios.map((c, i) => (
          <ConvenioLogoCard key={c} name={c} />
        ))}
      </div>
      <div className="reveal">
        <WaButton trackingId="convenios__confirmar-cobertura" size="lg" message={'Olá! Gostaria de confirmar minha cobertura para ' + cfg.nome + ' na SEMEP.'}>Confirmar minha cobertura</WaButton>
      </div>
    </div>
  </section>
);

// ── App ───────────────────────────────────────────────────────────────────────
const EspApp = () => {
  useReveal();
  return (
    <>
      <SharedHeader />
      <EspHero />
      <OQueESection />
      <QuandoProcurarSection />
      <ComoAtendemos />
      <SharedFaqSection badge="Dúvidas Frequentes" title={`Perguntas sobre ${cfg.nome}`}
        items={cfg.faq} bg="cream" waMsg={cfg.ctaMsg} waLabel="Falar no WhatsApp" />
      <InnerCTA h2="Pronto para iniciar?" subtitle="Fale com nossa equipe e tire suas dúvidas."
        waMsg={cfg.ctaMsg} waLabel="Falar no WhatsApp" />
      <SharedFooter />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<EspApp />);
