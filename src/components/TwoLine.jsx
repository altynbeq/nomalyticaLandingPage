import React from 'react';

const TwoLine = () => {
  return (
    <section className="flex flex-row items-center justify-around p-4 w-screen mt-2">
      
      <div className="flex flex-col items-center justify-center w-full max-w-lg space-x-4">
        
        <div className="flex items-center w-[45vw]">
          <div className="h-1 w-[90%] bg-black"></div>
          <div className="h-1 w-[10%] bg-gray-300"></div>
        </div>
        
        <p className="text-center text-[9px] font-medium text-black mt-2">Погрузитесь в IT вместе с Яндекс Лицеем</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-lg space-x-4">
       
        <div className="flex items-center w-[45vw]">
          
          <div className="h-1 w-full bg-gray-300"></div>
        </div>
        
        <p className="text-center text-[9px] font-medium text-black mt-2">Погрузитесь в IT вместе с Яндекс Лицеем</p>
      </div>
      
      
    </section>
  );
};

export default TwoLine;
