import React from "react";
import Image from "next/image";

interface DarkModeProps {
  darkMode: boolean;
}

interface SkillsProps {
  id: number;
  name: string;
  percentage: number;
}

const About: React.FC<DarkModeProps> = ({ darkMode }) => {
  const linkBg: string = darkMode ? "bg-slate-200" : "bg-[#cccbc9]";
  const barColor: string = darkMode ? "bg-green-200" : "bg-blue-500";

  const skills: Array<SkillsProps> = [
    { id: 1, name: "JS, Web Development", percentage: 65 },
    { id: 2, name: "Computer Vision", percentage: 90 },
    { id: 3, name: "Machine Learning", percentage: 80 },
    { id: 4, name: "Deep Learning", percentage: 70 },
    { id: 5, name: "Python", percentage: 90 },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen ">
      <div className="lg:w-full lg:max-w-[80%] lg:flex-row w-[80%] flex flex-col justify-center items-stretch">
        <div className="flex-[0_1_40%] p-4 m-2">
          <h1 className={`font-bold text-6xl p-2`}>JIAYE HE</h1>
          <h3 className={`font-bold text-2xl p-2 `}>
            國立高雄科技大學 電子工程系
          </h3>
          <p className={`text-lg p-2`}>
            熱愛程式開發，細心且重視效率並持續學習新技術
          </p>
          <div className={`flex mt-12 `}>
            <a
              href="https://line.me/ti/p/MerUTyrgLm"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBg} p-2 rounded-full m-2`}
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
              className={`${linkBg} p-2 rounded-full m-2`}
            >
              <Image
                src={darkMode ? "/github-dark.png" : "/github-bright.png"}
                alt="Github"
                width={36}
                height={36}
              />
            </a>
            <a
              href="/resume/jiayehe_104_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBg} p-2 rounded-full m-2`}
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
              className={`${linkBg} p-2 rounded-full m-2`}
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

        <div className="lg:mt-0 mt-2 flex-[0_1_60%] p-4 m-2">
          <h3 className={`text-4xl text-center`}>關於我</h3>
          <p className={`text-xl text-center mt-2`}>
            就學期間接觸過醫療影像辨識，機器學習、深度學習領域，額外修讀網頁全端開發課程。目前正學習演算法、微服務架構、AWS
            雲端技術等領域，目標往後端工程與資料科學領域發展。
          </p>

          <div className="space-y-4 flex flex-col items-center">
            {skills.map((skill) => (
              <div key={skill.id} className="w-[80%] mt-5 text-center">
                <h5 className="text-lg">{skill.name}</h5>
                <div className="w-full bg-gray-400 rounded-full h-4">
                  <div
                    className={`${barColor} h-4 rounded-full`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
