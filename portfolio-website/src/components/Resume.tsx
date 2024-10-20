import React from "react";
import Image from "next/image";
interface DarkModeProps {
  darkMode: boolean;
}

const Resume: React.FC<DarkModeProps> = ({ darkMode }) => {
  return (
    <section className="min-h-96 pt-24 ">
      <div className="flex flex-col items-center">
        <p className={`text-4xl text-center`}>
          <span
            className={`${
              darkMode ? "border-green-200" : "border-blue-700"
            } border-b-4`}
          >
            履歷
          </span>
        </p>
        <div className=" flex justify-center items-center mt-4 pt-10 pb-4 w-[70%]">
          <div id="resume-prop">
            <Image
              src="/resume/cv_thumbnail.png"
              alt="resume"
              className={`${
                darkMode
                  ? "border-gray-600 bg-green-200"
                  : "border-black bg-gray-600"
              } border-2 p-1 mr-4`}
              width={320}
              height={640}
            />
          </div>
          <div id="download-and-open resume btn">
            <div className="flex justify-end text-black">
              <a
                href="/resume/jiayehe_104_resume.pdf"
                download="jiayehe_resume.pdf"
                className={`${
                  darkMode
                    ? "bg-blue-200 border-slate-700 border"
                    : "bg-red-200 border-slate-700 border"
                } flex items-center pl-3 pr-3 pt-2 pb-2 mr-3 text-lg`}
              >
                <Image
                  src={`${
                    darkMode ? "/download-dark.png" : "/download-bright.png"
                  }`}
                  alt="reset"
                  className="mr-2"
                  width={24}
                  height={24}
                />
                下載 PDF
              </a>

              <a
                href="/resume/jiayehe_104_resume.pdf"
                target="_blank"
                className={`${
                  darkMode
                    ? "bg-green-200 border-slate-200 border"
                    : "bg-blue-200 border-slate-700 border"
                } flex items-center pl-3 pr-3 pt-2 pb-2 text-lg`}
              >
                <Image
                  src={`${
                    darkMode
                      ? "/open-in-browser-dark.png"
                      : "/open-in-browser-bright.png"
                  }`}
                  alt="reset"
                  className="mr-2"
                  width={24}
                  height={24}
                />
                線上瀏覽
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
