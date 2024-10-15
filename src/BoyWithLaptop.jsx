import React from 'react';
import boyLaptop from './assets/boyLaptop.png';

function BoyWithLaptop() {
  return (
    <div className="bg-white lg:mx-[10px] mx-[20px] py-8">
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:items-center lg:justify-between">
        {/* Фото */}
        <div className="lg:w-1/2 w-full mt-4 lg:mt-0 relative">
          <img
            src={boyLaptop}
            alt="boy with laptop"
            className="w-full object-cover rounded-3xl"
            style={{ objectFit: 'cover' }}
          />
          {/* Кружок с номером */}
          <div className="absolute top-4 right-4 bg-customBlue text-white rounded-full w-[30px] h-[30px] flex justify-center items-center text-sm lg:w-[40px] lg:h-[40px] lg:text-lg xl:w-[60px] xl:h-[60px] xl:text-xl">
            01
          </div>
        </div>

        {/* Текст */}
        <div className="lg:w-1/2 w-full mt-4 lg:mt-0 lg:ml-8">
          <h1 className="text-textBlue text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
            <p>Больше не нужно</p>
            <p>тратить время на </p>
            <p>ручной сбор данных</p>
          </h1>

          <p className="text-textBlue text-sm sm:text-base lg:text-lg xl:text-xl">
          <p>Данные интегрируются автоматически, включая </p>
          <p>автоматическую загрузку банковских выписок.</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoyWithLaptop;

