import React, { useEffect } from "react";
import Image from "next/image";
import { FormEvent } from "react";
import { useState } from "react";

interface DarkModeProps {
  darkMode: boolean;
}
interface FormDataProps {
  name: string;
  email: string;
  content: string;
}

const Contact: React.FC<DarkModeProps> = ({ darkMode }) => {
  const linkBg: string = darkMode ? "bg-slate-200" : "bg-[#cccbc9]";
  const formStyle: string = `${
    darkMode ? "border-slate-200" : "border-slate-500"
  } bg-slate-200 border-2 focus-within:border-blue-700 transition`;

  const [submitMsg, setSubmitMsg] = useState("");

  const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/meoqoode", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitMsg("您的留言已送出成功，收到訊息後會盡快與您聯繫！");
      form.reset();
    } else {
      setSubmitMsg("您的留言送出失敗，請使用其他聯絡方式與我聯繫！");
    }
  };

  useEffect(() => {
    setSubmitMsg("");
  }, []);

  return (
    <section className="min-h-80 pb-10 pt-28">
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

        <div
          className={`xl:flex-row xl:items-start xl:justify-around flex flex-col items-center justify-between mt-4 pt-10 pb-4 w-[80%]`}
        >
          <div className="xl:mb-0 flex-[0_1_40%] mb-10">
            <p className="text-xl font-bold mb-6">
              下方是我的社交媒體聯絡方式：
            </p>
            <div className="flex mb-6">
              <a
                href="https://line.me/ti/p/MerUTyrgLm"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBg} p-2 rounded-full m-2`}
              >
                <Image
                  src={darkMode ? "/line-dark.png" : "/line-bright.png"}
                  alt="LINE"
                  width={36}
                  height={36}
                />
              </a>
              <a
                href="https://github.com/Sapphire0912"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBg} p-2 rounded-full m-2`}
              >
                <Image
                  src={darkMode ? "/github-dark.png" : "/github-bright.png"}
                  alt="Github"
                  width={36}
                  height={36}
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=hejiaye1002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBg} p-2 rounded-full m-2`}
              >
                <Image
                  src={darkMode ? "/mail-dark.png" : "/mail-bright.png"}
                  alt="Github"
                  width={36}
                  height={36}
                />
              </a>
            </div>
            <p className="text-xl font-bold">
              也歡迎透過右側表單留言傳送給我！
            </p>
          </div>
          <div className="xl:flex-[0_1_60%] md:w-[70%] w-[90%] text-black">
            <form onSubmit={formSubmit} method="POST">
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
                  name="name"
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
                  name="email"
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
                  name="content"
                ></textarea>
              </div>

              <div className="hidden">
                <label>
                  BOT 偵測區域:
                  <input name="bot-field" className="hidden" />
                </label>
              </div>

              <div className="lg:justify-end lg:flex-row flex flex-col items-center justify-center">
                {submitMsg && (
                  <p
                    className={`${
                      darkMode
                        ? "text-green-200 font-bold"
                        : "text-blue-500 font-bold"
                    } `}
                  >
                    {submitMsg}
                  </p>
                )}
                <div className="lg:justify-end lg:mt-0 mt-4 flex">
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
                      src={`${
                        darkMode ? "/send-dark.png" : "/send-bright.png"
                      }`}
                      alt="reset"
                      className="mr-2"
                      width={24}
                      height={24}
                    />
                    <span className="text-lg">送出</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
