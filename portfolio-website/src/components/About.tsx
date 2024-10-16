import React from "react";
import Image from "next/image";

interface DarkModeProps {
  darkMode: boolean;
}

const About: React.FC<DarkModeProps> = ({ darkMode }) => {
  const linkBg: string = darkMode ? "bg-slate-200" : "bg-[#cccbc9]";
  return (
    <section>
      <div className="border-2 border-green-700 h-screen">
        <div className="left-info">
          <h1 className={`font-bold text-5xl`}>JIAYE HE</h1>
          <h3 className={`font-bold text-2xl`}>
            國立高雄科技大學 | 電子工程系
          </h3>
          <p className={`text-xl`}>
            熱愛程式開發，細心且重視效率並持續學習新技術
          </p>
          <div className={`flex`}>
            <a
              href="https://line.me/ti/p/MerUTyrgLm"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBg} p-2 rounded-full`}
            >
              <Image
                src={darkMode ? "/line-dark.png" : "/line-bright.png"}
                alt="LINE"
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://github.com/Sapphire0912"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBg} p-2 rounded-full`}
            >
              <Image
                src={darkMode ? "/github-dark.png" : "/github-bright.png"}
                alt="Github"
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://github.com/Sapphire0912"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBg} p-2 rounded-full`}
            >
              <Image
                src={darkMode ? "/cv-dark.png" : "/cv-bright.png"}
                alt="CV"
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=hejiaye1002@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBg} p-2 rounded-full`}
            >
              <Image
                src={darkMode ? "/mail-dark.png" : "/mail-bright.png"}
                alt="Github"
                width={36}
                height={36}
              />
            </a>
          </div>
        </div>
        <div className="right-info"></div>
      </div>
      <div className="kit">工具箱</div>
    </section>
  );
};

export default About;
