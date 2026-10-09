import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock3, Instagram, Menu, MessageCircle, Sparkles, Star, X } from "lucide-react";

// Import de Dados Estáticos (JSON)
import clinicData from "./data/clinicData.json";

// Imports das imagens de resultados
import antes1 from "../assests/resultados/antes1.png";
import depois1 from "../assests/resultados/depois1.png";
import antes2 from "../assests/resultados/antes2.png";
import depois2 from "../assests/resultados/depois2.png";
import antes3 from "../assests/resultados/antes3.png";
import depois3 from "../assests/resultados/depois3.png";
import antes4 from "../assests/resultados/antes4.png";
import depois4 from "../assests/resultados/depois4.png";
import antes5 from "../assests/resultados/antes5.png";
import depois5 from "../assests/resultados/depois5.png";
import antes6 from "../assests/resultados/antes6.png";
import depois6 from "../assests/resultados/depois6.png";
import antes7 from "../assests/resultados/antes7.png";
import depois7 from "../assests/resultados/depois7.png";
import antes8 from "../assests/resultados/antes8.png";
import depois8 from "../assests/resultados/depois8.png";
import antes9 from "../assests/resultados/antes9.png";
import depois9 from "../assests/resultados/depois9.png";
import antes10 from "../assests/resultados/antes10.png";
import depois10 from "../assests/resultados/depois10.png";
import "./styles.css";

const services = clinicData.services;
const testimonials = clinicData.testimonials;

const results = [
  { id: 1, before: antes1, after: depois1, title: "Botox para Rugas na Testa" },
  { id: 2, before: antes2, after: depois2, title: "Preenchimento Labial" },
  { id: 3, before: antes3, after: depois3, title: "Lipo de Papada Enzimática" },
  { id: 4, before: antes4, after: depois4, title: "Toxina Botulínica para Rugas na Carrinha de Bravo" },
  { id: 5, before: antes5, after: depois5, title: "Preenchimento do Bigode Chinês" },
  { id: 6, before: antes6, after: depois6, title: "Botox na Área dos Olhos" },
  { id: 7, before: antes7, after: depois7, title: "Preenchimento de Olheiras" },
  { id: 8, before: antes8, after: depois8, title: "Toxina Botulínica para Sorriso Gengival" },
  { id: 9, before: antes9, after: depois9, title: "Ultraformer mais Sculptra" },
  { id: 10, before: antes10, after: depois10, title: "Harmonização Facial Sculptra e Preenchimento" }
];

function App() {
  const whatsapp = "55" + "88" + "99963" + "1913" + "?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20BernaClin.";
  const instagram = "esteticabernardo";
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [servicePage, setServicePage] = useState(0);

  const getServicesPerPage = () => {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  };

  const [servicesPerPage, setServicesPerPage] = useState(getServicesPerPage());

  const totalServicePages = Math.ceil(services.length / servicesPerPage);

  const visibleServices = services.slice(
    servicePage * servicesPerPage,
    servicePage * servicesPerPage + servicesPerPage
  );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const [resultPage, setResultPage] = useState(0);
  const getResultsPerPage = () => (window.innerWidth <= 600 ? 1 : 2);

  const [resultsPerPage, setResultsPerPage] = useState(getResultsPerPage());

  const totalResultPages = Math.ceil(results.length / resultsPerPage);

  const visibleResults = results.slice(
    resultPage * resultsPerPage,
    resultPage * resultsPerPage + resultsPerPage
  );

  useEffect(() => {
    const handleResize = () => {
      setResultsPerPage(getResultsPerPage());
      setResultPage(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setResultPage((currentPage) => (currentPage >= totalResultPages - 1 ? 0 : currentPage + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [totalResultPages]);

  useEffect(() => {
    const handleResize = () => {
      setServicesPerPage(getServicesPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServicePage((currentPage) => (currentPage >= totalServicePages - 1 ? 0 : currentPage + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [totalServicePages]);

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => scrollTo("inicio")} aria-label="Ir para o início">
            <img src="/imagens/logo.jpg" alt="Logo da BernaClin" className="brand-mark" />
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("servicos")}>Serviços</button>
            <button onClick={() => scrollTo("sobre")}>Sobre Nós</button>
            <button onClick={() => scrollTo("resultados")}>Resultados</button>
            <button onClick={() => scrollTo("depoimentos")}>Depoimentos</button>
            <button className="nav-contact" onClick={() => scrollTo("contato")}>Contato <ArrowUpRight size={16}/></button>
          </nav>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        {/*<section className="hero" id="inicio">
          <div className="hero-orb orb-one"></div>
          <div className="hero-orb orb-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15}/> ELEVATE CONFIDENCE · ENHANCE BEAUTY</div>
              <h1>Sua beleza em destaque,<br/><em>sua confiança</em> em evidência.</h1>
              <p>Cuidar da pele não é um luxo; é seu compromisso diário de cuidar da sua beleza única.</p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => scrollTo("contato")}>Entre em contato <ArrowUpRight size={18}/></button>
                <button className="button ghost" onClick={() => scrollTo("servicos")}>Conheça os serviços</button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-frame hero-photo">
                <div className="photo-placeholder">
                  <Sparkles size={42}/>
                  <img src="/imagens/dr.png" alt="Imagem principal da clínica" className="hero-image" />
                </div>
              </div>
               <div className="floating-card">
                <div className="mini-icon"><Star size={17}/></div>
                <div><strong>10+ anos</strong><span>de experiência</span></div> 
              </div>
              <div className="vertical-label">BERNACLIN · ESTÉTICA &amp; BELEZA</div>
            </div>
          </div>
        </section>

        <div className="marquee">
          <div>ENHANCE BEAUTY <span>✦</span> ELEVAR A CONFIANÇA <span>✦</span> REALÇAR A BELEZA <span>✦</span> ELEVATE CONFIDENCE <span>✦</span></div>
        </div>*/}

        <section className="section about" id="sobre">
          <div className="container split">
            <div className="section-image portrait-placeholder">
              <img src="/imagens/clinica.png" alt="Clinica" className="image" />
              <span className="image-tag">Beleza / Cuidado</span>
            </div>
            <div className="section-copy">
              {/*<span className="section-kicker">NOSSA JORNADA</span>*/}
              <h2>Beleza que valoriza <em>quem você é.</em></h2>
              <p>Na BernaClin, estamos dedicados a realçar sua beleza natural e aumentar sua autoconfiança. Fundada por profissional experiente, nosso compromisso com a excelência nos tornou um destino de confiança para cuidados com a pele e bem-estar.</p>
              <div className="feature-list">
                <div><b>01</b><span><strong>Anos de Experiência</strong>Aproveite nossos anos de experiência na indústria.</span></div>
                <div><b>02</b><span><strong>Compromisso com a Excelência</strong>Serviços de alta qualidade com atenção aos detalhes.</span></div>
                <div><b>03</b><span><strong>Experiências Personalizadas</strong>Beleza que te empodera, feita só para você.</span></div>
              </div>
              <button className="text-link" onClick={() => scrollTo("contato")}>Fale com a BernaClin <ArrowUpRight size={18}/></button>
            </div>
          </div>
        </section>

        <section className="section services" id="servicos">
          <div className="container">
            <div className="section-heading services-heading">
              <div>
                <span className="section-kicker">CUIDADOS ESPECIAIS</span>
                <h2>Nossos serviços <em>especiais</em></h2>
              </div>
            </div>

            <div className="service-grid">
              {visibleServices.map((service, i) => (
                <article className="service-card" key={service.title}>
                  <div className="service-body">
                    <div className="service-top">
                      <span>{service.short}</span>
                      <span>{String(servicePage * servicesPerPage + i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <small><b>Ideal para:</b> {service.ideal}</small>
                    
                    <button className="button primary service-button" onClick={() => scrollTo("contato")}>
                      Entre em contato <ArrowUpRight size={17}/>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="results section" id="resultados">
          <div className="container">
            <div className="results-head">
              <div>
                <span className="section-kicker">TRANSFORMAÇÕES</span>
                <h2>Antes e depois,<br/><em>resultados reais.</em></h2>
              </div>
              <p>Na BernaClin, acreditamos no poder da transformação. Nosso compromisso em realçar a beleza natural e a confiança é exemplificado pelos resultados incríveis alcançados por nossos clientes.</p>
            </div>
            <div className="gallery" key={resultPage}>
              {visibleResults.map((item) => (
                <div className="gallery-item" key={item.id}>
                  <div className="before"><img src={item.before} alt={`Antes - ${item.title}`} /><span>ANTES</span></div>
                  <div className="after"><img src={item.after} alt={`Depois - ${item.title}`} /> <span>DEPOIS</span></div>
                  <div className="gallery-caption">{item.title}</div>
                </div>
              ))}
            </div>
            <p className="gallery-note">Resultados apresentados com autorização dos clientes.</p>
          </div>
        </section>

        <section className="section testimonials" id="depoimentos">
          <div className="container testimonial-layout">
            <div><span className="section-kicker">DEPOIMENTOS</span><h2>Quem vive a experiência<br/><em>conta a história.</em></h2><p>Confira o que nossos clientes dizem sobre a experiência BernaClin.</p></div>
            <div className="testimonial-card">
              <div className="stars">{[1,2,3,4,5].map(x => <Star key={x} size={17} fill="currentColor"/>)}</div>
              <blockquote>“{testimonials[testimonial][2]}”</blockquote>
              <div className="testimonial-author"><div className="author-avatar">{testimonials[testimonial][0][0]}</div><div><strong>{testimonials[testimonial][0]}</strong><span>{testimonials[testimonial][1]}</span></div></div>
              <div className="slider-controls"><button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)}><ChevronLeft/></button><span>0{testimonial+1} / 0{testimonials.length}</span><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}><ChevronRight/></button></div>
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="container contact-box">
            <div><span className="section-kicker">FALE CONOSCO</span><h2>Pronta para revelar<br/><em>seu verdadeiro brilho?</em></h2><p>Entre em contato e descubra o cuidado ideal para você.</p></div>
            <div className="contact-actions">
              <a className="contact-button whatsapp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp <ArrowUpRight size={18}/></a>
              <a className="contact-button instagram" href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noreferrer"><Instagram /> Instagram <ArrowUpRight size={18}/></a>
              <div className="contact-info"><Clock3 size={18}/><span>Agende sua avaliação diretamente com a clínica.</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><button className="brand footer-brand" onClick={() => scrollTo("inicio")}><img src="/imagens/ber.png" alt="BernacLin" className="brand-mark" /></button><p>Elevate confidence. Enhance beauty.</p></div>
          <div className="footer-links"><button onClick={() => scrollTo("servicos")}>Serviços</button><button onClick={() => scrollTo("sobre")}>Sobre Nós</button><button onClick={() => scrollTo("resultados")}>Resultados</button><button onClick={() => scrollTo("contato")}>Contato</button></div>
        </div>
        <div className="container">©2026 Bernardo | Harmonização e Estética Avançada. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);