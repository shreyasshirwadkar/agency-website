"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-bg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Element } from "react-scroll";
import "./index.css";

// Direct imports for components
import Services from "./components/Services";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";

function App() {
  // useEffect(() => {
  //   const initializeVanta = () => {
  //     if (window.VANTA && window.VANTA.FOG) {
  //       window.VANTA.FOG({
  //         el: "#vanta-background",
  //         mouseControls: false,
  //         touchControls: false,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         highlightColor: 0x6,
  //         midtoneColor: 0x3481b6,
  //         lowlightColor: 0x2094a2,
  //         baseColor: 0x0,
  //         blurFactor: 0.71,
  //         speed: 1.10,
  //         zoom: 0.70,
  //       });
  //     }
  //   };

  //   const script1 = document.createElement("script");
  //   script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
  //   script1.async = true;
  //   script1.onload = () => {
  //     const script2 = document.createElement("script");
  //     script2.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
  //     script2.async = true;
  //     script2.onload = initializeVanta;
  //     document.body.appendChild(script2);
  //   };
  //   document.body.appendChild(script1);
  // }, []);

  const LandingPage = () => (
    // <div id="vanta-background" className="w-100vw h-100vh">
    <div>
          <AuroraBackground>

       <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 bg-transparent"
      >
        <div className="text-3xl md:text-7xl font-bold text-gradient text-center bg-transparent">
  Adtask AI Agency
</div>
 
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4 bg-transparent">
        We provide all-in-one tech solutions, all under one roof.
        </div>
        <div className="flex justify-evenly w-96 max-h-full bg-transparent">
        <button 
        onClick={() => {
          document
            .getElementById('services-section')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative  flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
          <span className="text-lg font-normal">{`Services`}</span>
          
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      
      <button 
      onClick={() => {
        document
          .getElementById('contact-section')
          ?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
          <span className="text-lg font-normal">{`Contact Us`}</span>
          
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
        
        </div>
      </motion.div>
    </AuroraBackground>
      {/* <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" async defer></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js" async defer></script>
      </Helmet> */}
      <header className="flex justify-between align-middle fixed top-0 left-0 right-0 px-2 py-5 z-50 bg-transparent">
        <div className="logo">
        <a
    href="#"
    onClick={(e) => {
      e.preventDefault(); // Prevent default anchor behavior
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
    }}
  >
    <img src={logo} alt="Logo" />
  </a>
        </div>
        <nav>
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
        <div className="bg-transparent">
        <button 
        onClick={() => {
          document
            .getElementById('contact-section')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
          <span className="text-xl font-semibold">{`Contact Us`}</span>
          
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>

     </div>
      </header>

      {/* Sections for smooth scroll */}
      <Element name="services-section" id="services-section" className="section">
        <Services />
      </Element>
      <Element name="stats-section"  id="stats-section" className="section">
        <Stats />
      </Element>
      <Element name="reviews-section" id="reviews-section" className="section">
        <Reviews />
      </Element>
      <Element name="contact-section" id="contact-section" className="section">
        <ContactUs />
      </Element>
      <Element name="footer" className="section">
        <Footer />
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
