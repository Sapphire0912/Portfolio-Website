import React from "react";
import Image from "next/image";

interface DarkModeProps {
  darkMode: boolean;
}

const Contact: React.FC<DarkModeProps> = ({ darkMode }) => {
  const formStyle: string =
    "bg-slate-200 border-2 border-slate-200 focus-within:border-blue-700 transition";
  ("");

  return (
    <section className="min-h-80 border-2 border-red-500">
      <div className="flex flex-col items-center">
        <p className={`text-4xl text-center`}>
          <span
            className={`${
              darkMode ? "border-green-200" : "border-blue-700"
            } border-b-4`}
          >
            與我聯繫
          </span>
        </p>

        <div className="border-2 border-blue-500 flex mt-4 pt-10 pb-4 w-[80%] ">
          <div className="border-2 border-green-500">left</div>
          <div className="border-2 border-purple-500 text-black">
            <form>
              <div className={`${formStyle} flex mb-6`}>
                <Image
                  src={`${darkMode ? "/user-dark.png" : "/user-bright.png"}`}
                  alt="users"
                  width={36}
                  height={36}
                />
                <input
                  type="text"
                  className="bg-transparent focus:outline-none pl-2 w-full"
                  placeholder="名稱 Name"
                ></input>
              </div>

              <div className={`${formStyle} flex mb-6`}>
                <Image
                  src={`${darkMode ? "/email-dark.png" : "/email-bright.png"}`}
                  alt="email"
                  width={36}
                  height={36}
                />
                <input
                  type="email"
                  className="bg-transparent focus:outline-none pl-2 w-full"
                  placeholder="電子郵件 E-mail"
                ></input>
              </div>

              <div className={`${formStyle} flex items-start mb-6`}>
                <Image
                  src={`${darkMode ? "/send-dark.png" : "/send-bright.png"}`}
                  alt="send"
                  width={36}
                  height={36}
                />
                <textarea
                  cols={50}
                  rows={6}
                  className="bg-transparent focus:outline-none pl-2"
                  placeholder="留言 Message"
                ></textarea>
              </div>
              <div>
                <button type="reset">清除</button>
                <button type="submit">送出</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
