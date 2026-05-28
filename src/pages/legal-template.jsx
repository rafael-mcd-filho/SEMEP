// ── SEMEP · Template para páginas legais (Termos, Política, LGPD) ─────────────

const LEGAL = {
  termos: {
    badge: '⚖ Termos de Uso',
    title: 'Termos de Uso',
    updatedAt: '24 de maio de 2026',
    intro: 'Este documento estabelece os termos e condições para uso do site da SEMEP — Saúde Mental & Bem-Estar. Ao acessar e utilizar este site, você concorda com os termos descritos abaixo. Caso não concorde, recomendamos não utilizar nossos serviços online.',
    sections: [
      { h: '1. Sobre a SEMEP',
        body: [
          'A SEMEP é uma clínica multidisciplinar de saúde mental localizada na Av. Alagoas, 435 — Bairro dos Estados, João Pessoa/PB, CEP 58030-150.',
          'O site institucional tem caráter exclusivamente informativo e de comunicação. Não realizamos atendimento clínico, prescrição, diagnóstico ou tratamento médico por meio digital sem agendamento prévio com profissional habilitado.',
        ] },
      { h: '2. Uso permitido do site',
        body: [
          'Você pode acessar, consultar e compartilhar livremente os conteúdos públicos do site para fins pessoais e não comerciais.',
          'É vedado: (a) reproduzir, copiar, comercializar ou redistribuir conteúdos sem autorização expressa; (b) utilizar o site para envio de spam, mensagens ofensivas ou conteúdo ilícito; (c) realizar engenharia reversa, scraping em massa ou tentativas de comprometer a segurança da plataforma.',
        ] },
      { h: '3. Agendamentos e comunicações',
        body: [
          'O contato inicial é feito por WhatsApp, telefone fixo ou formulário. O agendamento efetivo de consulta somente se concretiza após confirmação por nossa equipe.',
          'O envio de mensagem pelo WhatsApp ou formulário não substitui consulta clínica e não constitui vínculo terapêutico.',
        ] },
      { h: '4. Responsabilidade pelo conteúdo',
        body: [
          'As informações disponíveis neste site têm caráter educativo e informativo. Não substituem consulta presencial com profissional habilitado.',
          'A SEMEP empenha-se em manter as informações atualizadas, mas não se responsabiliza por eventuais inexatidões, omissões ou desatualizações. Sempre confirme com nossa equipe.',
        ] },
      { h: '5. Convênios e valores',
        body: [
          'A cobertura de convênios indicada no site é meramente referencial. A aceitação efetiva depende da categoria do plano, da especialidade e da regulamentação vigente. Recomendamos confirmar a cobertura por WhatsApp antes do agendamento.',
          'Os valores de atendimento particular variam por especialidade e profissional e são informados sob consulta.',
        ] },
      { h: '6. Propriedade intelectual',
        body: [
          'A marca SEMEP, o logotipo, os textos, imagens, vídeos, ícones e demais elementos do site são protegidos por direitos autorais e de propriedade industrial.',
          'É proibido o uso não autorizado, incluindo reprodução, modificação, distribuição ou utilização comercial sem prévia autorização por escrito.',
        ] },
      { h: '7. Links externos',
        body: [
          'O site pode conter links para serviços externos (Google Maps, Instagram, WhatsApp, entre outros). A SEMEP não se responsabiliza pelo conteúdo, políticas ou práticas desses serviços terceiros.',
        ] },
      { h: '8. Alterações nos termos',
        body: [
          'A SEMEP poderá atualizar estes termos a qualquer momento, sem aviso prévio. A versão vigente é sempre a publicada nesta página, com a data de atualização indicada acima.',
        ] },
      { h: '9. Foro e legislação aplicável',
        body: [
          'Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da comarca de João Pessoa/PB para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.',
        ] },
      { h: '10. Contato',
        body: [
          'Dúvidas sobre estes termos podem ser encaminhadas pelo WhatsApp (83) 3340-3562 ou pelos telefones fixos (83) 3506-4224 e (83) 3506-4227.',
        ] },
    ],
  },

  politica: {
    badge: '🔒 Política de Privacidade',
    title: 'Política de Privacidade',
    updatedAt: '24 de maio de 2026',
    intro: 'A SEMEP — Saúde Mental & Bem-Estar respeita sua privacidade e está comprometida com a proteção dos dados pessoais que coletamos. Esta Política descreve como tratamos suas informações, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).',
    sections: [
      { h: '1. Quem é o controlador dos dados',
        body: [
          'A SEMEP, com sede na Av. Alagoas, 435 — Bairro dos Estados, João Pessoa/PB, é a controladora dos dados pessoais coletados por meio deste site, do WhatsApp institucional e do atendimento clínico.',
        ] },
      { h: '2. Dados que coletamos',
        body: [
          'Coletamos os seguintes tipos de dados:',
          '• Dados de identificação: nome, telefone, e-mail (quando você nos envia mensagem pelo formulário ou WhatsApp);',
          '• Dados clínicos sensíveis: histórico, queixa, diagnóstico, plano terapêutico (apenas no contexto do atendimento, com seu consentimento expresso);',
          '• Dados de navegação: endereço IP, tipo de dispositivo, páginas acessadas e tempo de permanência (via cookies e ferramentas de análise);',
          '• Dados de contato administrativo: convênio, dados de faturamento e demais informações necessárias para a prestação do serviço.',
        ] },
      { h: '3. Para que utilizamos seus dados',
        body: [
          '• Para responder a contatos, agendar consultas e prestar atendimento clínico;',
          '• Para confirmar coberturas de convênio e emitir documentos clínicos;',
          '• Para cumprir obrigações legais (registros médicos, prontuário, faturamento);',
          '• Para comunicações relacionadas ao seu atendimento (lembretes, retornos, orientações);',
          '• Para análise estatística agregada e melhoria do site (sem identificação individual);',
          '• Para cumprimento de obrigações legais e regulatórias.',
        ] },
      { h: '4. Base legal',
        body: [
          'O tratamento de dados ocorre com fundamento em uma ou mais das seguintes bases legais previstas na LGPD: consentimento; execução de contrato; cumprimento de obrigação legal; tutela da saúde por profissionais ou serviços de saúde; e exercício regular de direitos.',
          'Dados clínicos sensíveis são tratados exclusivamente para a tutela da saúde, com sigilo profissional garantido pelos códigos de ética das profissões envolvidas (CRM, CRP, CRFa, CRN).',
        ] },
      { h: '5. Compartilhamento de dados',
        body: [
          'A SEMEP não comercializa dados pessoais. Eventuais compartilhamentos ocorrem apenas:',
          '• Entre profissionais da equipe SEMEP envolvidos no seu atendimento, para construção do plano terapêutico integrado;',
          '• Com operadoras de plano de saúde, quando o atendimento é feito por convênio;',
          '• Com fornecedores tecnológicos (provedores de hospedagem, e-mail, prontuário eletrônico), sob compromisso contratual de confidencialidade;',
          '• Quando exigido por autoridade legal, judicial ou regulatória.',
        ] },
      { h: '6. Armazenamento e segurança',
        body: [
          'Os dados clínicos são armazenados pelo prazo mínimo de 20 anos, conforme exigência do Conselho Federal de Medicina (Resolução CFM nº 1.821/2007).',
          'Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda, alteração ou divulgação indevida.',
        ] },
      { h: '7. Seus direitos como titular',
        body: [
          'A LGPD garante a você os seguintes direitos:',
          '• Confirmação da existência de tratamento;',
          '• Acesso aos seus dados;',
          '• Correção de dados incompletos, inexatos ou desatualizados;',
          '• Anonimização, bloqueio ou eliminação de dados desnecessários;',
          '• Portabilidade dos dados;',
          '• Eliminação dos dados tratados com seu consentimento (observadas exceções legais);',
          '• Informação sobre compartilhamentos;',
          '• Revogação do consentimento.',
        ] },
      { h: '8. Cookies',
        body: [
          'Este site utiliza cookies para funcionamento essencial e análise estatística. Você pode configurar seu navegador para recusar cookies, mas algumas funcionalidades podem ser afetadas.',
        ] },
      { h: '9. Alterações desta Política',
        body: [
          'Esta Política pode ser atualizada periodicamente. Recomendamos consulta frequente. A data de atualização está indicada no topo desta página.',
        ] },
      { h: '10. Contato com o Encarregado (DPO)',
        body: [
          'Para exercer seus direitos ou esclarecer dúvidas, entre em contato pelo WhatsApp (83) 3340-3562 ou pelo telefone (83) 3506-4224.',
        ] },
    ],
  },

  lgpd: {
    badge: '🛡 LGPD',
    title: 'Lei Geral de Proteção de Dados',
    updatedAt: '24 de maio de 2026',
    intro: 'A SEMEP — Saúde Mental & Bem-Estar atua em conformidade com a Lei Geral de Proteção de Dados Pessoais — Lei nº 13.709/2018 (LGPD), que regula o tratamento de dados pessoais por entidades públicas e privadas no Brasil.',
    sections: [
      { h: 'O que é a LGPD',
        body: [
          'A Lei Geral de Proteção de Dados é a legislação brasileira que disciplina o tratamento de dados pessoais, com o objetivo de proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade da pessoa natural.',
          'A LGPD entrou em vigor em setembro de 2020 e suas sanções administrativas passaram a ser aplicáveis em agosto de 2021, sob fiscalização da Autoridade Nacional de Proteção de Dados (ANPD).',
        ] },
      { h: 'Como a SEMEP se adequa à LGPD',
        body: [
          'Como clínica de saúde, lidamos com dados pessoais sensíveis — informações sobre saúde mental, histórico clínico, diagnósticos e tratamentos. Adotamos as seguintes práticas para garantir conformidade:',
          '• Política de Privacidade clara e acessível;',
          '• Coleta limitada ao estritamente necessário para o atendimento;',
          '• Consentimento expresso quando aplicável;',
          '• Sigilo profissional respeitado por toda a equipe (CRM, CRP, CRFa, CRN);',
          '• Armazenamento seguro de prontuários, em conformidade com Resolução CFM nº 1.821/2007 e demais normativas;',
          '• Acesso restrito aos profissionais envolvidos diretamente no atendimento;',
          '• Treinamento contínuo da equipe sobre privacidade e proteção de dados.',
        ] },
      { h: 'Dados sensíveis na saúde',
        body: [
          'A LGPD classifica dados de saúde como sensíveis (art. 5º, II), com proteção reforçada. O tratamento desses dados pela SEMEP ocorre exclusivamente para a tutela da saúde, por profissionais habilitados, em ambiente clínico ético e seguro.',
          'Em nenhuma hipótese comercializamos ou compartilhamos dados clínicos com terceiros para finalidades alheias ao seu cuidado.',
        ] },
      { h: 'Seus direitos como titular',
        body: [
          'A qualquer momento você pode solicitar:',
          '• Confirmar se tratamos seus dados;',
          '• Acessar suas informações;',
          '• Corrigir dados incorretos ou desatualizados;',
          '• Solicitar portabilidade ou eliminação (observadas obrigações legais de retenção, como prontuário clínico);',
          '• Revogar consentimento;',
          '• Saber com quem seus dados foram compartilhados.',
        ] },
      { h: 'Como exercer seus direitos',
        body: [
          'Você pode contatar nosso Encarregado de Proteção de Dados pelos canais oficiais da SEMEP:',
          '• WhatsApp: (83) 3340-3562',
          '• Telefones: (83) 3506-4224 · (83) 3506-4227',
          '• Endereço: Av. Alagoas, 435 — Bairro dos Estados, João Pessoa/PB',
          'Solicitações são analisadas em até 15 dias úteis, conforme prazo previsto em lei.',
        ] },
      { h: 'Em caso de incidente de segurança',
        body: [
          'Em caso de incidente que possa acarretar risco ou dano relevante aos titulares, comunicaremos a ANPD e os titulares afetados em prazo razoável, com informações sobre a natureza do incidente, dados envolvidos, medidas adotadas e formas de mitigação.',
        ] },
      { h: 'Autoridade Nacional de Proteção de Dados (ANPD)',
        body: [
          'Você também pode dirigir reclamações à ANPD, autoridade pública federal responsável por zelar pelo cumprimento da LGPD. Para mais informações, consulte gov.br/anpd.',
        ] },
    ],
  },
};

const cfgLegal = LEGAL[window.SEMEP_LEGAL] || LEGAL.politica;

const LegalApp = () => {
  useReveal();
  return (
    <>
      <SharedHeader />

      {/* Hero */}
      <section className="pt-[88px] pb-12 bg-gradient-to-b from-surface to-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="bg-brand text-white mb-5">{cfgLegal.badge}</Badge>
          <h1 className="font-serif text-[36px] lg:text-[46px] font-bold text-brand leading-tight mb-3">{cfgLegal.title}</h1>
          <p className="text-txt-sec text-[14px]">Última atualização: {cfgLegal.updatedAt}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="reveal bg-surface rounded-2xl border border-divider p-6 lg:p-7 mb-10">
            <p className="text-txt text-[15px] leading-relaxed">{cfgLegal.intro}</p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {cfgLegal.sections.map((s, i) => (
              <div key={i} className="reveal">
                <h2 className="font-serif text-[22px] lg:text-[24px] font-bold text-brand mb-4">{s.h}</h2>
                <div className="flex flex-col gap-3">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-txt-sec text-[15px] leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="reveal mt-14 pt-10 border-t border-divider text-center">
            <p className="text-txt-sec text-[13px] mb-5">Dúvidas sobre este documento? Fale com nossa equipe.</p>
            <WaButton size="md" message="Olá! Tenho uma dúvida sobre as informações legais da SEMEP.">Falar no WhatsApp</WaButton>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<LegalApp />);
