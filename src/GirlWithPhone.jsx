import React from 'react';
import girlPhone from './assets/girlPhone.png';

function GirlWithPhone() {
  return (
    <div className='lg:mx-[10px] mx-[50px] md:mx-[30px] sm:mx-[20px] bg-white'>
      <div className='flex flex-wrap bigScreens:relative'>
        <p className='bg-customBlue 3xl:text-3xl text-white rounded-full w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] sm:text-xs md:text-xs lg:text-sm xl:text-xl 2xl:w-[60px] 2xl:h-[60px] 2xl:text-2xl 3xl:w-[80px] 3xl:h-[80px] mt-[30px] ml-[30px] md:ml-0 sm:ml-0 flex justify-center items-center 2xl:text-2xl 3xl:text-4xl'>
          02
        </p>
        <div className='sm:w-[80%] md:w-[80%] lg:w-[40%] xl:w-[40%] 2xl:w-[35%] 3xl:w-[30%] 3xl:mt-56 2xl:mt-52 xl:mt-36 lg:mt-28 md:mt-24 sm:mt-24 3xl:ml-32 2xl:ml-8 xl:ml-8 md:ml-4 ml-0'>
            <div className='display:inline sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-8xl leading-tight font-inter text-textBlue'>
                <h1>Теперь все финансы вашего бизнеса собраны на одном экране</h1>
            </div>
            <div className='lg:w-[80%] xl:w-[80%] 2xl:w-[90%] 3xl:w-[90%] lg:mt-8 xl:mt-10 2xl:mt-16 3xl:mt-16 display:inline sm:text-sm sm:mt-4 xl:text-xl 2xl:text-3xl 3xl:text-4xl text-justify font-thin leading-snug font-inter text-textBlue'>
                <h1>MetaBI заменит вам Финансиста и Excel, собрав в одном месте самые важные метрики бизнеса.</h1>
            </div>
        </div>
        <div className='bigScreens:absolute bigScreens:inset-y-0 bigScreens:right-0 mt-[30px] md:w-[100%] lg:w-[50%] xl:w-[45%] mr-[30px] md:mr-0 sm:mr-0'>
            <img 
              src={girlPhone} 
              alt="girlPhone" 
              className="w-full object-cover sm:w-[360px] sm:h-[346px] md:w-[750px] md:h-[380px] lg:w-[525px] lg:h-[570px] xl:w-[630px] xl:h-[700px] 2xl:w-[860px] 2xl:h-[860px] 3xl:h-auto rounded-3xl" 
              style={{ objectFit: 'cover' }} 
            />
        </div>
      </div>
    </div>
  );
}

export default GirlWithPhone;
