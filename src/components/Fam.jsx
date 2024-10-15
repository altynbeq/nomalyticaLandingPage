import React from 'react';
import image from '/thnk.png'; // Убедитесь, что путь правильный

const Fam = () => {
  return (
    <div className="relative w-full bg-[#F6F6F9] h-auto mx-auto rounded-2xl mt-8 p-8 flex flex-col md:flex-row items-center justify-between">
      {/* Левый блок с заголовком и текстовыми элементами */}
      <div className="flex flex-col space-y-4 md:space-y-6 md:max-w-[50%]">
        {/* Заголовок */}
        <h1 className="text-left text-[#25195C] text-3xl md:text-4xl font-bold mb-4 md:mb-8">
          Вам точно что-то из этого знакомо
        </h1>

        {/* Первый текстовый блок */}
        <div
          className="relative p-4 rounded-2xl bg-white inline-block w-[220px] h-[80px]  xl:ml-96"
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p className="text-[#25195C] text-[14px] leading-tight">
            Тратите время на Excel, но он все равно кажется неудобным
          </p>
          <div className="absolute top-2 right-3 flex items-center justify-center">
            <div className="w-4 h-4 bg-red-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Второй текстовый блок */}
        <div
          className="relative p-4 rounded-2xl bg-white inline-block w-[250px] h-[80px]"
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p className="text-[#25195C] text-[14px] leading-tight">
            Данные есть, но не хватает времени и навыков для их анализа
          </p>
          <div className="absolute top-2 right-3 flex items-center justify-center">
            <div className="w-4 h-4 bg-red-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Третий текстовый блок */}
        <div
          className="relative p-4 rounded-2xl bg-white inline-block w-[250px] h-[80px]"
          style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p className="text-[#25195C] text-[14px] leading-tight">
            Сталкиваетесь с кассовыми разрывами и не всегда успеваете устранить их вовремя
          </p>
          <div className="absolute top-2 right-3 flex items-center justify-center">
            <div className="w-4 h-4 bg-red-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Правый блок с изображением */}
      <div className="relative">
        <img src={image} alt="Stressed person" className="rounded-lg lg:w-[466px] lg:h-[466px]" />
        
      </div>
    </div>
  );
};

export default Fam;









{/*const Fam = () => {
  return (
    <div className="relative flex justify-center items-center mt-60">
      
      <img
        src="/thnk.png" 
        className="rounded-[56px] p-1 "
      />

      
      <div
        className="absolute w-[48vw] p-2 rounded-[38px] bg-white top-[-20%] right-[2%]"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p className="text-black text-[14px] leading-snug font-extrabold ml-3">
          <span className="block text-start">You have the data, </span>
          <span className="block text-start">but lack the time </span>
          <span className="block text-start">and skills for</span>
          <span className="block text-start">analysis.</span>
        </p>
        <div className="absolute top-2 right-3 flex items-center justify-center">
          <div className="w-4 h-4 bg-red-300 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>

       
      <div
        className="absolute w-[50vw] p-2 rounded-[28px] bg-white bottom-[-18%] left-[2%]"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p className="text-black text-[14px] leading-snug font-extrabold ml-3">
          <span className="block text-start">Facing team issues </span>
          <span className="block text-start">but don't have time </span>
          <span className="block text-start">to resolve them?</span>
        </p>
        <div className="absolute top-2 right-3 flex items-center justify-center">
          <div className="w-4 h-4 bg-red-300 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fam;*/}