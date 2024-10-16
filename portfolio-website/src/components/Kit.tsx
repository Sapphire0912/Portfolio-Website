import React from "react";
import Image from "next/image";
interface DarkModeProps {
  darkMode: boolean;
}

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
          <Image src="/js.png" alt="js" width={48} height={48} />
          <Image src="/ts.png" alt="ts" width={48} height={48} />
          <Image src="/js.png" alt="js" width={48} height={48} />
          <Image src="/js.png" alt="js" width={48} height={48} />
          <Image src="/js.png" alt="js" width={48} height={48} />
          <Image src="/js.png" alt="js" width={48} height={48} />
          <Image src="/js.png" alt="js" width={48} height={48} />
          <Image src="/js.png" alt="js" width={48} height={48} />
          <Image src="/js.png" alt="js" width={48} height={48} />
          <Image src="/js.png" alt="js" width={48} height={48} />
        </div>
      </div>
    </section>
  );
};

export default Kit;
