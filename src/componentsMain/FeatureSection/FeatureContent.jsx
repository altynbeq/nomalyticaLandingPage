import React from "react";

function FeatureContent() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-8/12 max-md:w-full">
      <div className="flex flex-col items-center justify-center text-violet-950 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-row ">
           {/* <div className="self-center w-[50px] px-4 py-2 text-sm font-semibold leading-loose bg-lime-300 rounded-full text-indigo-950">
            02
          </div> */}
          <h2 className=" mt-1 md:mt-10 text-[22px] font-medium leading-10 text-center">
            Больше не нужно <br /> тратить время на <br /> ручной сбор данных
          </h2>
        </div>
       
        <p className="mt-8 text-[16px] leading-7 text-center">
          Данные интегрируются автоматически, <br /> включая автоматическую загрузку <br /> банковских выписок.
        </p>
      </div>
    </div>
  );
}

export default FeatureContent;
