import React from "react";
import Button from "./Button";

function DemoRegistration() {
  return (
    <section className="flex overflow-hidden flex-col px-3 text-center bg-white">
      <div className="flex relative flex-col justify-center items-center px-20 py-24 rounded-3xl min-h-[440px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/38b3eeb46d2bd7b3b27b1c2910d1c2b9cb43c1876e20214cd61c3178ad314f08?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959" 
          alt="" 
          className="object-cover absolute inset-0 size-full" 
        />
        <div className="flex relative flex-col -mb-5 max-w-full w-[590px] max-md:mb-2.5">
          <h2 className="text-4xl font-medium leading-10 text-white max-md:max-w-full">
            Кроме того, мы берем на себя <br /> 
            обучение вашего бухгалтера <br /> 
            работе с MetaBI
          </h2>
          <Button 
            text="Записаться на Демо" 
            className="self-center px-6 py-5 mt-14 max-w-full text-lg font-semibold leading-loose bg-lime-300 rounded-[100px] text-violet-950 w-[220px] max-md:px-5 max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
}

export default DemoRegistration;