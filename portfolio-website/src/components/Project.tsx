import React from "react";

interface DarkModeProps {
  darkMode: boolean;
}

const Project: React.FC<DarkModeProps> = ({ darkMode }) => {
  return (
    <section className="min-h-96 border-2 border-blue-700">
      <div className="flex flex-col items-center">
        <p className={`text-4xl text-center`}>
          <span
            className={`${
              darkMode ? "border-green-200" : "border-blue-700"
            } border-b-4`}
          >
            專案作品
          </span>
        </p>
        <div className="border-2 border-green-600 flex justify-center items-start mt-4 pt-10 pb-4 w-[70%]">
          <div id="project" className="border-2 border-red-500">
            專案作品
          </div>
          <div
            id="download-and-open resume btn"
            className="border-2 border-purple-500"
          >
            文字說明區
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
