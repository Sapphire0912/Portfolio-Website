"use client";

import AboutSection from "../components/About";
import ProjectSection from "../components/Project";
import ResumeSection from "../components/Resume";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section>
      <div id="header">
        <section className="flex-center">
          <div className="border-2 border-green-500">HE</div>
          <nav className="nav">
            <a href="#home">首頁</a>
            <a href="#projects">專案作品</a>
            <a href="#resume">履歷</a>
            <a href="#contact">與我聯繫</a>
          </nav>
          <button type="button" onClick={() => setDarkMode(!darkMode)}>
            <Image
              width={48}
              height={48}
              style={{ width: "auto", height: "auto" }}
              src={darkMode ? "/images/sun.svg" : "/images/moon.png"}
              alt={darkMode ? "sun" : "moon"}
            />
          </button>
        </section>
      </div>

      <div id="home">
        <AboutSection />
      </div>

      <div id="projects">
        <ProjectSection />
      </div>

      <div id="resume">
        <ResumeSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </section>
  );
}
