import React from "react";
import Slider from "react-slick";
import image1 from "../assets/leo/lotsPapers.jpeg";
import image2 from "../assets/leo/lazyWorkers.jpeg";
import image3 from "../assets/leo/badBusinessPlan.jpg";
import image4 from "../assets/leo/angryAtPapers.jpg";
import image5 from "../assets/leo/happyBusi.jpg";
import bg from "../assets/optbg.png";

import ShimmerButton from "../componentsMain/ShimmerBtn";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full shadow hover:shadow-lg z-10"
    onClick={onClick}
  >
    <span className="text-black text-lg font-bold">&gt;</span>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full shadow hover:shadow-lg z-10"
    style={{ marginLeft: "-20px" }} // Отодвигаем стрелку левее
    onClick={onClick}
  >
    <span className="text-black text-lg font-bold">&lt;</span>
  </div>
);

export const Problems = () => {
  const items = [
    {
      title: "Формирование отчетов",
      description:
        "Сделайте увлекательным для детей путешествие по школьной программе с помощью интерактивных заданий",
      image: image1,
    },
    {
      title: "Продуктивность сотрудников",
      description:
        "Прокачивайтесь в решении прикладных IT‑задач и примеряйте профессию разработчика. Путь в IT начинается здесь",
      image: image2,
    },
    {
      title: "Принятие решений",
      description:
        "Проходите учебные курсы от анализа данных до маркетинга, осваивайте новые навыки и трудоустраивайтесь в сфере IT",
      image: image3,
    },
    {
      title: "Учет склада",
      description:
        "Погрузитесь в глубины Data Science и фундаментально разберитесь во всех нюансах с помощью легендарной",
      image: image4,
    },
    {
      title: "Программы в университетах",
      description:
        "Изучайте IT‑дисциплины в сильнейших вузах с преподавателями из Яндекса, получайте и применяйте на практике",
      image: image5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div
      className="flex pb-10 px-10 flex-col items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative w-full flex justify-center text-center mb-1 py-6 overflow-hidden">
        <h1 className="text-4xl font-bold text-white px-6 py-2 bg-[#302e81] transform -skew-x-12">
          Улучшаем ведение бизнеса
        </h1>
      </div>

      <Slider {...settings} className="gap-1 max-w-[1358px] w-[100%] md:w-[90%]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex my-10 md:m-2 md:max-w-[90%] flex-col bg-neutral-100 rounded-xl overflow-hidden"
          >
            <div className="flex justify-center align-center bg-cover bg-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex-grow text-black text-2xl font-normal p-6">
              {item.title}
            </div>
            <p className="text-[#323232] font-normal px-6 flex-grow">
              {item.description.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <ShimmerButton className="mt-4 ml-4 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
