import React from "react";
import Image from "next/image";
interface DarkModeProps {
  darkMode: boolean;
}

interface ToolKitProps {
  src: string;
  alt: string;
  text: string;
}

const toolKitsrc: Array<ToolKitProps> = [
  { src: "/js.png", alt: "js", text: "Javascript" },
  { src: "/ts.png", alt: "ts", text: "Typescript" },
  { src: "/react.png", alt: "react", text: "React" },
  { src: "/nodejs.png", alt: "nodejs", text: "Node.js" },
  { src: "/mysql.png", alt: "mysql", text: "MySQL" },
  { src: "/python.png", alt: "python", text: "Python" },
  { src: "/C.png", alt: "C", text: "C" },
  { src: "/mongodb.png", alt: "mongodb", text: "MongoDB" },
  { src: "/git.png", alt: "git", text: "Git" },
  { src: "/docker.png", alt: "docker", text: "Docker" },
];

const Kit: React.FC<DarkModeProps> = ({ darkMode }) => {
  return (
    <section className="min-h-96">
      <div className="flex flex-col items-center">
        <p className={`text-4xl text-center`}>
          <span
            className={`${
              darkMode ? "border-green-200" : "border-blue-700"
            } border-b-4`}
          >
            工具箱
          </span>
        </p>

        <div className=" mt-4 pt-10 pb-4 grid grid-cols-5 gap-6 w-[60%]">
          {toolKitsrc.map((item, index) => (
            <div key={index} className=" flex flex-col items-center">
              <Image
                className={`${
                  darkMode ? "bg-slate-200" : "bg-slate-300"
                } p-2 rounded-full mb-1`}
                src={item.src}
                alt={item.alt}
                width={64}
                height={64}
              />
              <span className="text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kit;
