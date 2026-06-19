// SEMEP · App principal

const App = () => {
  useReveal();

  return (
    <>
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Especialidades />
        <Sobre />
        <Split />
        <ComoFunciona />
        <Convenios />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>

      <Footer />

      <a
        href={waHref("Olá! Vim pelo site da SEMEP e gostaria de atendimento.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        data-whatsapp-id="botao-flutuante__falar-no-whatsapp"
        data-whatsapp-location="botao_flutuante"
        data-whatsapp-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-wa rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
        style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.45)" }}
      >
        <Ic.WhatsApp size={26} className="text-white" />
      </a>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
