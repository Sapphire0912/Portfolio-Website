"use client";

import AboutSection from "../components/About";
import KitSection from "../components/Kit";
import ProjectSection from "../components/Project";
import ResumeSection from "../components/Resume";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const navColor: string = darkMode
    ? "hover:border-green-200"
    : "hover:border-blue-700";

  useEffect(() => {
    setMenuClick(false);
  }, []);

  return (
    <section
      className={`${
        darkMode ? "bg-slate-700 text-white" : "bg-[#f1ede8] text-black"
      } min-h-screen`}
    >
      <header
        id="header"
        className={`${
          darkMode ? "bg-slate-700" : "bg-[#f1ede8]"
        } flex fixed top-0 left-0 w-full z-50 justify-between items-center p-6 shadow-md`}
      >
        <div
          className={`${
            darkMode ? "bg-gray-300 text-black" : "bg-gray-900 text-white"
          } text-xl font-bold p-2 rounded-md`}
        >
          HE
        </div>

        <nav className="sm:block hidden space-x-8 text-xl font-bold">
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

        <div className="sm:hidden block">
          <Image
            src={darkMode ? "/menu-dark.png" : "/menu-bright.png"}
            alt="menu"
            width={48}
            height={48}
            className="hover:cursor-pointer"
            onClick={() => setMenuClick(!menuClick)}
          />

          {menuClick && (
            <nav
              className={`${
                darkMode
                  ? "bg-slate-700 text-white border-[#f1ede8] border-2"
                  : "bg-[#f1ede8] text-black border-slate-700 border-2"
              } flex flex-col fixed left-0 top-0 w-full h-[50%] z-40 text-xl font-bold items-center justify-evenly`}
            >
              <a
                href="#"
                className={`border-b-4 border-transparent hover:border-b-4 ${navColor}`}
                onClick={() => setMenuClick(!menuClick)}
              >
                首頁
              </a>
              <a
                href="#projects"
                className={`border-b-4 border-transparent hover:border-b-4 ${navColor}`}
                onClick={() => setMenuClick(!menuClick)}
              >
                專案作品
              </a>
              <a
                href="#resume"
                className={`border-b-4 border-transparent hover:border-b-4 ${navColor}`}
                onClick={() => setMenuClick(!menuClick)}
              >
                履歷
              </a>
              <a
                href="#contact"
                className={`border-b-4 border-transparent hover:border-b-4 ${navColor}`}
                onClick={() => setMenuClick(!menuClick)}
              >
                與我聯繫
              </a>

              <button
                type="button"
                className=""
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMenuClick(!menuClick);
                }}
              >
                <img
                  width={48}
                  height={48}
                  src={darkMode ? "/sun.svg" : "/moon.png"}
                  alt={darkMode ? "sun" : "moon"}
                />
              </button>
            </nav>
          )}
        </div>

        <button
          type="button"
          className={`${
            darkMode ? "bg-gray-300" : "bg-slate-100"
          } rounded-full sm:block hidden`}
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
          <AboutSection darkMode={darkMode} />
        </div>

        <div id="toolKit">
          <KitSection darkMode={darkMode} />
        </div>

        <div id="projects">
          <ProjectSection darkMode={darkMode} />
        </div>

        <div id="resume">
          <ResumeSection darkMode={darkMode} />
        </div>

        <div id="contact">
          <ContactSection darkMode={darkMode} />
        </div>
      </main>
      <Footer />
    </section>
  );
}
