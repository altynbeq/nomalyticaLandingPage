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
    className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer bg-gray-200 h-12 w-12 flex items-center justify-center rounded-full shadow hover:shadow-lg z-10"
    onClick={onClick}
  >
    <span className="text-black text-2xl font-bold">&gt;</span>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer bg-gray-200 h-12 w-12 flex items-center justify-center rounded-full shadow hover:shadow-lg z-10"
    onClick={onClick}
  >
    <span className="text-black text-2xl font-bold">&lt;</span>
  </div>
);

const Problems = () => {
  const items = [
    {
      title: "Формирование отчетов",
      description:
        "Автоматизируйте процесс формирования отчетов для улучшения бизнес-процессов и ускорения принятия решений. Простой и быстрый доступ к аналитике для ваших сотрудников.",
      image: image1,
    },
    {
      title: "Продуктивность сотрудников",
      description:
        "Повышайте продуктивность ваших сотрудников с помощью эффективных инструментов для отслеживания выполнения задач и оптимизации рабочего времени.",
      image: image2,
    },
    {
      title: "Принятие решений",
      description:
        "Сделайте процесс принятия решений более быстрым и точным, используя данные и аналитические инструменты для обоснованных решений в бизнесе.",
      image: image3,
    },
    {
      title: "Учет склада",
      description:
        "Оптимизируйте учет склада с помощью автоматизированных систем, которые помогут избежать ошибок в инвентаризации и упростят процесс управления запасами.",
      image: image4,
    },
    {
      title: "Программы в университетах",
      description:
        "Интегрируйте программы обучения в ведущих университетах для подготовки специалистов с актуальными навыками и знаниями, которые помогут вашему бизнесу расти.",
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
      className="flex pb-10 overflow-hidden px-10 flex-col items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative w-full flex justify-center text-center mb-1 py-6 overflow-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 transform -skew-x-12">
              Улучшаем ведение бизнеса
          </h1>
      </div>


      <Slider {...settings} className="gap-1 max-w-[1358px] w-[100%] md:w-[90%]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex  md:m-2 md:max-w-[90%] flex-col bg-neutral-100 rounded-xl overflow-hidden"
          >
            <div className="flex justify-center items-center bg-cover bg-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[100%] h-auto object-cover" // 80% of the original width to reduce by 20%
              />
            </div>
            <div className="flex-grow text-center my-2 text-black text-xl font-normal h-12">
              {item.title}
            </div>
            <p className="text-[#323232] font-normal text-center flex-grow h-32 overflow-hidden">
              {item.description.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="flex justify-center ">
              <ShimmerButton className="mt-4 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Problems;
