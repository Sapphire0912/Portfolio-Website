import React from "react";
import Image from "next/image";
interface DarkModeProps {
  darkMode: boolean;
}

const Resume: React.FC<DarkModeProps> = ({ darkMode }) => {
  return (
    <section className="min-h-96 pt-24 border-2 border-blue-700">
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
        <div className="border-2 border-green-600 flex justify-center items-start mt-4 pt-10 pb-4 w-[70%]">
          <div id="resume-prop" className="border-2 border-red-500">
            履歷縮圖
          </div>
          <div
            id="download-and-open resume btn"
            className="border-2 border-purple-500"
          >
            <div className="flex justify-end text-black">
              <button
                type="button"
                className={`${
                  darkMode
                    ? "bg-blue-200 border-slate-700 border"
                    : "bg-red-200 border-slate-700 border"
                } flex items-center pl-3 pr-3 pt-2 pb-2 mr-3`}
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
                <span className="text-lg">下載 PDF</span>
              </button>

              <button
                type="button"
                className={`${
                  darkMode
                    ? "bg-green-200 border-slate-200 border"
                    : "bg-blue-200 border-slate-700 border"
                } flex items-center pl-3 pr-3 pt-2 pb-2`}
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
                <span className="text-lg">線上瀏覽</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
