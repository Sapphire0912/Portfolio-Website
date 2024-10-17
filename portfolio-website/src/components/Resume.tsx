import React from "react";
interface DarkModeProps {
  darkMode: boolean;
}

const Resume: React.FC<DarkModeProps> = ({ darkMode }) => {
  return (
    <section className="min-h-96">
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
      </div>
    </section>
  );
};

export default Resume;
