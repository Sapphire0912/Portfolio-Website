import React from "react";
interface DarkModeProps {
  darkMode: boolean;
}

const Kit: React.FC<DarkModeProps> = ({ darkMode }) => {
  return (
    <section className="border-2 border-red-500 min-h-screen n">
      <h2 className={`text-4xl text-center`}>工具箱</h2>
    </section>
  );
};

export default Kit;
