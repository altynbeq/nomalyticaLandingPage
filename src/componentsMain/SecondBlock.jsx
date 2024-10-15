import React from "react";
import Slider from "react-slick";
import girlPhone from '../assets/girlPhone.png';
import image1 from '../assets/leo/lotsPapers.jpeg';
import image2 from '../assets/leo/lazyWorkers.jpeg';
import image3 from '../assets/leo/badBusinessPlan.jpg';
import image4 from '../assets/leo/angryAtPapers.jpg';
import image5 from '../assets/leo/happyBusi.jpg';

export const Problems = () => {
  const items = [
    {
      title: "Формирование отчетов",
      description: "Сделайте увлекательным для детей путешествие по школьной программе с помощью интерактивных заданий",
      image: image1, // Use imported images
    },
    {
      title: "Продуктивность сотрудников",
      description: "Прокачивайтесь в решении прикладных IT‑задач и примеряйте профессию разработчика. Путь в IT начинается здесь",
      image: image2,
    },
    {
      title: "Принятие решений",
      description: "Проходите учебные курсы от анализа данных до маркетинга, осваивайте новые навыки и трудоустраивайтесь в сфере IT",
      image: image3,
    },
    {
      title: "Подсчет итогов",
      description: "Погрузитесь в глубины Data Science и фундаментально разберитесь во всех нюансах с помощью легендарной ",
      image: image4,
    },
    {
      title: "Программы в университетах",
      description: "Изучайте IT‑дисциплины в сильнейших вузах с преподавателями из Яндекса, получайте и применяйте на пра",
      image: image5, // Keeping original image for this entry
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex m-10 flex-col items-center">
      <div className="relative w-full flex justify-center text-center mb-10">
        <div className="absolute mb-10 transform text-2xl text-center text-black font-normal font-['Inter']">
          Создаём тренды IT‑образования
        </div>
      </div>

      <Slider {...settings} className="gap-1 max-w-[1358px] w-[100%] md:w-[90%] mt-8">
        {items.map((item, index) => (
          <div key={index} className="flex my-10 md:m-2 md:max-w-[90%] flex-col bg-neutral-100 rounded-xl overflow-hidden ">
            <div className="flex justify-center align-center bg-cover bg-center">
              <img src={item.image} alt={item.title} className="w-full h-auto object-cover" /> {/* Using the image from item */}
            </div>
            <div className="flex-grow text-black text-2xl font-normal p-6">{item.title}</div>
            <p className="text-[#323232] font-normal px-6 flex-grow">
              {item.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <button className="mt-4 ml-4 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              Узнать больше
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};
