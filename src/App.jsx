import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Element } from "react-scroll";
import "./index.css";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import logo from "./assets/logo.png"
function App() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      VANTA.FOG({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x6,
        midtoneColor: 0x3481b6,
        lowlightColor: 0x2094a2,
        baseColor: 0x0,
        blurFactor: 0.71,
        speed: 1.10,
        zoom: 0.70,
      });
    };
  }, []);

  const LandingPage = () => (
    <div id="vanta-background" className="w-100vw h-100vh">
      <header className="flex justify-between align-middle fixed top-0 left-0 right-0 px-2 py-5 z-50 bg-transparent">
      {/* .landing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  z-index: 1000;
  background-color: transparent;
} */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          {/* Smooth scroll links */}
          <Link to="services-section" smooth={true} duration={500}>
            Services
          </Link>
          <Link to="stats-section" smooth={true} duration={500}>
            Stats
          </Link>
          <Link to="reviews-section" smooth={true} duration={500}>
            Reviews
          </Link>
          <Link to="contact-section" smooth={true} duration={500}>
            Contact Us
          </Link>
          
        </nav>
        <div className="cta-button">
          <Link to="contact-section" smooth={true} duration={500}>
            Contact Us
          </Link>
        </div>
      </header>

      <section className="landing-content">
        <div className="content-center">
          <h1>Adtask AI</h1>
          <p className="text-xl text-cyan-text">We provide all-in-one tech solutions, all under one roof.</p>
          <div className="buttons">
            <Link to="services-section" className="button" smooth={true} duration={500}>
              Our Services
            </Link>
            <Link to="contact-section" className="button" smooth={true} duration={500}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Sections for smooth scroll */}
      <Element name="services-section" className="section">
        <Services />
      </Element>
      <Element name="stats-section" className="section">
        <Stats />
      </Element>
      <Element name="reviews-section" className="section">
        <Reviews />
      </Element>
      <Element name="contact-section" className="section">
        <ContactUs />
      </Element>
      <Element name="footer" className="section">
        <Footer/>
      </Element>
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* All-in-one Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Optional: Add routes for direct navigation to individual components */}
        <Route path="/services" element={<Services />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </Router>
  );
}

export default App;
