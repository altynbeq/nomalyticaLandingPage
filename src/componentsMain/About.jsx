import React, { useEffect, useState } from "react";
import photo1 from "../assets/screenforbg.png";
import bg from '../assets/optbg.png';
import { RainbowButton } from "./RainbowBtn";

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
      className="w-full min-h-screen max-h-screen bg-cover bg-center bg-no-repeat overflow-hidden mt-20 md:mt-0"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-[100%] overflow-hidden mx-auto mr-0 px-4 pr-0 sm:px-6 sm:pr-0 lg:px-8 lg:pr-0 py-10 lg:py-20">
        {/* Контейнер с текстом слева и изображением справа */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Левая секция: текст */}
          <div className="w-full lg:w-1/2 overflow-hidden flex flex-col justify-center">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight font-normal max-w-xl ml-12">
              Аналитика бизнеса{windowWidth >= 640 && <br />}
              <p className="text-[#302e81] font-bold"> в один клик {windowWidth >= 640 && <br />} </p>
            </h1>
            <p className="mt-4 text-black text-base sm:text-lg leading-relaxed font-normal max-w-lg ml-12">
              Все ключевые показатели вашего бизнеса всегда под рукой — в любое время из любого места.
            </p>
            <div className="mt-8 ml-12">
              <RainbowButton className="gradient-bg border-2 border-solid rounded-[30px] p-2 transition duration-200" />
            </div>
          </div>

          {/* Правая секция: изображение */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center overflow-hidden max-w-full">
            <img
              className="object-contain max-w-full h-auto rounded-lg lg:ml-12 mt-5 md:w-full" // Reduced mt-10 to mt-5 to lift the image
              alt="Business analytics"
              src={photo1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
