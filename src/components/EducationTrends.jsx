import React from "react";
import Slider from "react-slick";
import ppl1 from '/ppl1.png';
import ppl2 from '/ppl2.png';
import ppl3 from '/ppl3.png';
import ppl4 from '/ppl4.png';

const CardData = [
    {
        id: 1,
        title: "Яндекс Учебник",
        description: "Сделайте увлекательным для детей путешествие по школьной программе с помощью интерактивных заданий и индивидуального трекинга",
        img: ppl1,
    },
    {
        id: 2,
        title: "Яндекс Лицей",
        description: "Проживите путь к решению прикладных IT-задач с примерами профессиональных разработчиков. Путь в IT начинается здесь.",
        img: ppl2,
    },
    {
        id: 3,
        title: "Яндекс Практикум",
        description: "Проходите учебные курсы для взрослых и детей по актуальным направлениям в сфере IT.",
        img: ppl3,
    },
    {
        id: 4,
        title: "Яндекс Курсы",
        description: "Пройдите курсы для начинающих и продвинутых IT-специалистов.",
        img: ppl4,
    },
];

const EducationTrends = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1440, // Экран шириной 1440px
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Экран шириной 1024px
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // Мобильные устройства
                settings: {
                    slidesToShow: 1.2, // Одна карточка и часть второй
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 mb-10 bg-white w-full">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold text-center sm:text-4xl text-black">
                    Создаём тренды <span className="text-blue-600">IT-образования</span>
                </h1>
                <Slider {...settings}>
                    {CardData.map((card) => (
                        <div className="my-6" key={card.id}>
                            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white relative"
                                 style={{
                                     width: card.id === 1 ? '345px' : '400px',
                                     height: card.id === 1 ? '460px' : '600px',
                                 }}>
                                <div className="mb-4">
                                    <img src={card.img} alt={card.title} className="rounded-lg w-full h-auto" />
                                </div>
                                <div className="flex flex-col items-start gap-4">
                                    <h1 className="text-xl font-bold text-black/80">{card.title}</h1>
                                    <p className="text-sm text-gray-500">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default EducationTrends;
