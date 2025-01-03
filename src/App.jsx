"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AuroraBackground } from "./components/ui/aurora-bg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FloatingNav } from "./components/ui/floating-navbar";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import "./index.css";

// Direct imports for components
import Services from "./components/Services";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";

function App() {
  const [showHeaderElements, setShowHeaderElements] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeaderElements(scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LandingPage = () => (
    <div>
      <FloatingNav navItems={navItems} className="hidden md:flex"  />

      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 1, y: 40 }}
          onAnimationComplete={() => {
            if (!hasAnimated) {
              setHasAnimated(true); // Set to true after the animation finishes
            }
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 bg-transparent"
        >
          <div className=" text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-gradient text-center bg-transparent">
            Adtask AI Agency
          </div>

          <div className="font-extralight text-base lg:text-xl sm:text-lg md:text-2xl text-neutral-200 py-4 bg-transparent text-center px-4 ">
    We provide all-in-one tech solutions, all under one roof.
  </div>

          <div className="flex justify-evenly w-96 max-h-full bg-transparent px-12">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-gray-400 hover:text-gray-300 flex items-center space-x-2"
              onClick={() => {
                document.getElementById("services-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <AceternityLogo />
              Services
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-gray-400 hover:text-gray-300 flex items-center space-x-2"
              onClick={() => {
                document.getElementById("contact-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <AceternityLogo />
              Contact us
            </HoverBorderGradient>
          </div>
        </motion.div>
      </AuroraBackground>

      <header className="flex justify-between align-middle fixed top-0 left-0 right-0 px-2 py-5 z-50 md:px-8 bg-transparent">
        <div className="logo ml-4 md:ml-7 bg-transparent">
          {showHeaderElements && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={logo} alt="Logo" className="h-8 md:h-12" />
            </a>
          )}
        </div>
        <div className="bg-transparent mr-4 md:mr-7">
          {showHeaderElements && (
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white flex items-center space-x-2"
              onClick={() => {
                document.getElementById("contact-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <AceternityLogo />
              Contact us
            </HoverBorderGradient>
          )}
        </div>
      </header>
          <section id="hero-section" >
          <HeroHighlightDemo></HeroHighlightDemo>
          </section>

      {/* Sections for smooth scroll */}
      <section id="services-section" className="section">
        <Services />
      </section>
      <section id="stats-section" className="section">
        <Stats />
      </section>
      <section id="reviews-section" className="section">
        <Reviews />
      </section>
      <section id="contact-section" className="section">
        <ContactUs />
      </section>
      <section id="footer" className="section">
        <Footer />
      </section>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

const navItems = [
  {
    name: "Services",
    link: "services-section",
  },
  {
    name: "Stats",
    link: "stats-section",
  },
  {
    name: "Reviews",
    link: "reviews-section",
  },
  {
    name: "Contact Us",
    link: "contact-section",
  },
];

const AceternityLogo = () => {
  return (
    <path
      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
      stroke="currentColor"
      strokeWidth="15"
      strokeMiterlimit="3.86874"
      strokeLinecap="round"
    />
  );
};

export default App;
