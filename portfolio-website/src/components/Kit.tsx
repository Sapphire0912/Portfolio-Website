import React from "react";
import Image from "next/image";
interface DarkModeProps {
  darkMode: boolean;
}

interface ToolKitProps {
  src: string;
  alt: string;
}

const toolKitsrc: Array<ToolKitProps> = [
  { src: "/js.png", alt: "js" },
  { src: "/ts.png", alt: "ts" },
  { src: "/react.png", alt: "react" },
  { src: "/nodejs.png", alt: "nodejs" },
  { src: "/mysql.png", alt: "mysql" },
  { src: "/python.png", alt: "python" },
  { src: "/C.png", alt: "C" },
  { src: "/mongodb.png", alt: "mongodb" },
  { src: "/git.png", alt: "git" },
  { src: "/docker.png", alt: "docker" },
];

const Kit: React.FC<DarkModeProps> = ({ darkMode }) => {
  return (
    <section className="border-2 border-red-500 min-h-screen ">
      <div className="text-center border-2 border-green-600">
        <p className={`text-4xl`}>
          <span
            className={`${
              darkMode ? "border-green-200" : "border-blue-700"
            } border-b-4`}
          >
            工具箱
          </span>
        </p>

        <div className="kit">
          {/* 使用 grid 來排版? */}
          {toolKitsrc.map((item) => (
            <Image src={item.src} alt={item.alt} width={48} height={48} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kit;
