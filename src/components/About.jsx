import React from 'react';

const About = () => {
  return (
    <header
      className="w-screen h-[170px] bg-cover bg-center md:h-[500px] sm:h-[200px]"
      style={{
        backgroundImage: "url('/aboutbg.png')",
        backgroundSize: 'cover', // Растягивает изображение на всю ширину и высоту
        backgroundRepeat: 'no-repeat', // Избегает повторения изображения
      }}
    >


<div className='flex flex-row p-4  justify-around xl:px-12'>
  <div>
      <h2 className="text-md md:text-4xl font-medium text-black">Погрузитесь в IT </h2>
      <h2 className="text-md md:text-4xl font-medium text-black"> вместе с Яндекс </h2>
      <h2 className="text-md md:text-4xl font-medium text-black"> Лицеем</h2>
      <h3 className="text-[7px] md:text-4xl font-normal text-black">Бесплатные IT-программы для школьников </h3>
      <h3 className="text-[7px] md:text-4xl font-normal text-black">с 13 лет, а также студентов колледжей</h3>
      <button className="bg-black text-white  rounded-md w-100 text-[12px] mt-2 ml-6">Get started</button>
  </div>
  <div className='ml-2 xl:ml-12'>
  <img src="/aboutph.png"  className="w-[190px] h-[124px] rounded-lg xl:w-[600px] xl:h-[370px]"></img>
  </div>
</div>





    </header>
  );
};

export default About;
