import React from "react";
import Image from "next/image";

interface DarkModeProps {
  darkMode: boolean;
}

const Contact: React.FC<DarkModeProps> = ({ darkMode }) => {
  const formStyle: string = `${
    darkMode ? "border-slate-200" : "border-slate-500"
  } bg-slate-200 border-2 focus-within:border-blue-700 transition`;

  return (
    <section className="min-h-80 border-2 border-red-500 pb-10 pt-4">
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

        <div className="border-2 border-blue-500 flex justify-around items-start mt-4 pt-10 pb-4 w-[80%] ">
          <div className="border-2 border-green-500 flex-[0_1_40%]">left</div>
          <div className="border-2 border-purple-500 flex-[0_1_60%] text-black">
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
                  src={`${
                    darkMode ? "/message-dark.png" : "/message-bright.png"
                  }`}
                  alt="send"
                  width={36}
                  height={36}
                />
                <textarea
                  className="bg-transparent focus:outline-none pl-2 w-full h-32"
                  placeholder="留言 Message"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="reset"
                  className={`${
                    darkMode
                      ? "bg-blue-200 border-slate-700 border"
                      : "bg-red-200 border-slate-700 border"
                  } flex items-center pl-3 pr-3 pt-2 pb-2 mr-3 rounded-3xl`}
                >
                  <Image
                    src={`${
                      darkMode ? "/reset-dark.png" : "/reset-bright.png"
                    }`}
                    alt="reset"
                    className="mr-2"
                    width={24}
                    height={24}
                  />
                  <span className="text-lg">清除</span>
                </button>

                <button
                  type="submit"
                  className={`${
                    darkMode
                      ? "bg-green-200 border-slate-200 border"
                      : "bg-blue-200 border-slate-700 border"
                  } flex items-center pl-3 pr-3 pt-2 pb-2 rounded-3xl`}
                >
                  <Image
                    src={`${darkMode ? "/send-dark.png" : "/send-bright.png"}`}
                    alt="reset"
                    className="mr-2"
                    width={24}
                    height={24}
                  />
                  <span className="text-lg">送出</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
