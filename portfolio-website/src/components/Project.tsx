import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface DarkModeProps {
  darkMode: boolean;
}

const labProjectTech: Array<string> = [
  "Python",
  "OpenCV",
  "C",
  "Sklearn",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Tensorflow",
];

const Project: React.FC<DarkModeProps> = ({ darkMode }) => {
  const techStyle: string = darkMode
    ? "pt-1 pb-1 pl-2 pr-2 mr-2 mb-2 rounded-2xl border border-green-200 text-green-200"
    : "pt-1 pb-1 pl-2 pr-2 mr-2 mb-2 rounded-2xl border border-blue-700 text-blue-700";

  return (
    <section className="min-h-96 pt-24">
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
        <div className="lg:flex-row lg:w-[90%] flex flex-col justify-end mt-4 pt-10 pb-4 w-[70%]">
          <div id="project" className="flex-[0_1_20%] mr-4">
            <Swiper
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={false}
              modules={[Navigation, Pagination]}
              className="w-full max-w-md"
            >
              <SwiperSlide>
                <div className="pb-8">
                  <img src="/projects/lab/example.gif" alt="example" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-8">
                  <img src="/projects/lab/skeletonize.png" alt="skeletonize" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-8">
                  <img src="/projects/lab/threshold.gif" alt="threshold" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-8">
                  <img src="/projects/lab/semantic.gif" alt="semantic" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pb-8">
                  <img src="/projects/lab/result.gif" alt="result" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            id="project description"
            className="lg:items-start lg:text-left flex-[0_1_50%] pl-2 flex flex-col items-center justify-start text-center"
          >
            <h3 className="text-2xl font-bold mb-3">超音波影像辨識</h3>
            <div className="flex flex-wrap">
              {labProjectTech.map((tech, index) => (
                <p key={index} className={`${techStyle}`}>
                  {tech}
                </p>
              ))}
            </div>
            <p className="text-lg mt-1 mb-1">
              實驗室醫療輔助診斷系統專案, 初期目標計算A4C的LVEF,
              完成至模組化設計並完成初版系統整合,
              使用者僅需輸入影片即可輸出計算結果影片
            </p>
            <p className="text-base">開發團隊：2人</p>
            <p className="text-base mb-3">時間：18個月</p>
            <div className="flex justify-start text-black">
              <a
                href="https://www.youtube.com/watch?v=iteGkPYy1z4"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "bg-blue-200 border-slate-700 border"
                    : "bg-red-200 border-slate-700 border"
                } flex items-center p-2 mr-3`}
              >
                <Image
                  src={`${darkMode ? "/demo-dark.png" : "/demo-bright.png"}`}
                  alt="demo"
                  className="mr-2"
                  width={24}
                  height={24}
                />
                專題影片
              </a>

              <a
                href="https://github.com/Sapphire0912/LaboratoryProject"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "bg-green-200 border-slate-200 border"
                    : "bg-blue-200 border-slate-700 border"
                } flex items-center p-2`}
              >
                <Image
                  src={`${
                    darkMode
                      ? "/github-demo-dark.png"
                      : "/github-demo-bright.png"
                  }`}
                  alt="github"
                  className="mr-2"
                  width={24}
                  height={24}
                />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
