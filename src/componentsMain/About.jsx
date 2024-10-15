import React, { useEffect, useState } from "react";
import photo1 from "../assets/screenforbg.png";
import bg from '../assets/optbg.png';

export const About = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-screen mt-20 min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        {/* Container with text on the left and image on the right */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-black text-2xl md:text-4xl lg:text-6xl tracking-tight leading-tight font-normal max-w-xl">
              Погрузитесь в IT {windowWidth >= 640 && <br />}
              вместе с Яндекс {windowWidth >= 640 && <br />}
              Лицеем
            </h1>
            <p className="mt-4 text-black text-base sm:text-lg leading-relaxed font-normal max-w-lg">
              Бесплатные IT-программы для школьников с 13 лет, а также
              {windowWidth >= 1024 && <br />} студентов колледжей
            </p>
            <div className="mt-8">
              <button className="bg-black border-2-solid rounded-[30px] p-2 transition duration-200">
                <span className="text-white font-semibold">Записаться на Демо</span>
              </button>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <img
              className="object-contain max-w-md lg:max-w-lg xl:max-w-xl mt-10 md:w-full h-auto rounded-lg shadow-lg lg:ml-auto"
              alt="Foto lyceum"
              src={photo1}
            />
          </div>
        </div>

        {/* Footer Section */}
        {/* <div className="flex md:flex-row flex-row justify-around mt-10 md:mt-20 w-full gap-6 sm:gap-4">
          {[
            "Погрузитесь в IT вместе с Яндекс Лицеем",
            "Вдохновитесь на новый старт в IT",
            "Освойте работу с YandexGPT",
          ].map((text, index) => (
            <div key={index} className="text-center w-full sm:w-1/3">
              <div className="bg-[#00000014] h-0.5 rounded-sm mb-2" />
              <p className="text-[#323232] text-sm sm:text-base leading-tight sm:leading-relaxed font-normal">
                {text}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
