"use client";

import AboutSection from "../components/About";
import ProjectSection from "../components/Project";
import ResumeSection from "../components/Resume";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const navColor: string = darkMode
    ? "hover:border-green"
    : "hover:border-blue-700";

  return (
    <section
      className={`${
        darkMode ? "bg-slate-700 text-white" : "bg-[#f1ede8] text-black"
      } min-h-screen`}
    >
      <header
        id="header"
        className="fixed top-0 left-0 w-full flex justify-between items-center p-6"
      >
        <div
          className={`${
            darkMode ? "bg-gray-300 text-black" : "bg-gray-900 text-white"
          } text-xl font-bold p-2 rounded-md`}
        >
          HE
        </div>
        <nav className="space-x-8 text-xl font-bold">
          <a href="#" className={`relative hover:border-b-4 ${navColor}`}>
            首頁
          </a>
          <a
            href="#projects"
            className={`relative hover:border-b-4 ${navColor}`}
          >
            專案作品
          </a>
          <a href="#resume" className={`relative hover:border-b-4 ${navColor}`}>
            履歷
          </a>
          <a
            href="#contact"
            className={`relative hover:border-b-4 ${navColor}`}
          >
            與我聯繫
          </a>
        </nav>
        <button
          type="button"
          className={`${
            darkMode ? "bg-gray-300" : "bg-slate-100"
          } rounded-full`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <img
            width={48}
            height={48}
            src={darkMode ? "/sun.svg" : "/moon.png"}
            alt={darkMode ? "sun" : "moon"}
          />
        </button>
      </header>

      <main className="pt-24">
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
      </main>
      <Footer />
    </section>
  );
}
