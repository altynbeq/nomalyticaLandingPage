import React, { useState, useEffect } from 'react';
import boyLaptop from '../assets/boyLaptop.png';
import image from '/thnk.png';
import image1 from '../assets/leo/lotsPapers.jpeg';
import image2 from '../assets/leo/lazyWorkers.jpeg';
import image3 from '../assets/leo/badBusinessPlan.jpg';
import image4 from '../assets/leo/angryAtPapers.jpg';
import meltVideo from '../assets/melt.mp4'; // Import your video file

const InfoCard = ({ text, className }) => (
  <div className={`bg-white rounded-xl shadow-md p-4 max-w-xs z-10 ${className}`}>
    <div className="w-2 h-2 bg-red-500 rounded-full mb-2"></div>
    <p className="text-sm">{text}</p>
  </div>
);

const cardDataOne = [
  {
    text: "Данные есть",
    className: "absolute text-black top-3/4 right-10 transform translate-x-1/4 w-fit" // Full width for mobile
  },
  {
    text: "кассовыми разрывами ",
    className: "absolute text-black top-[150px] left-0 transform translate-x-1/8 w-fit" // Full width for mobile
  },
  {
    text: "Тратите время",
    className: "absolute text-black top-[300px] right-5 transform translate-x-1/4 w-fit" // Full width for mobile
  },
  {
    text: "кассовыми разрывами",
    className: "absolute text-black top-[400px] left-2 transform translate-x-1/6 w-fit" // Full width for mobile
  },
 
];

const cardData = [
  {
    text: "Данные есть, но не хватает времени и навыков для их анализа",
    className: "absolute text-black top-1/4 right-0 transform translate-x-1/4 md:translate-x-1/6 lg:top-1/4 lg:left-auto"
  },
  {
    text: "Тратите время на Excel, но он все равно кажется неудобным",
    className: "absolute text-black bottom-1/3 left-0 transform -translate-x-1/4 lg:bottom-1/3"
  },
  {
    text: "Сталкиваетесь с кассовыми разрывами и не всегда успеваете устранить их вовремя",
    className: "absolute text-black bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 lg:translate-y-1/4"
  },
  {
    text: "Сталкиваетесь с кассовыми разрывами и не всегда успеваете устранить их вовремя",
    className: "absolute text-black right-0 bottom-1/3 transform translate-x-1/4 translate-y-1/4 lg:right-0 lg:bottom-1/3"
  }
];



function FamiliarSection() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  // Update the mobile state when window size changes
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className="bg-gray-100 py-24 px-4 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white min-h-[500px] flex flex-col lg:flex-row rounded-2xl shadow-lg p-8">
          <div className="flex flex-wrap w-full items-start justify-between relative">
            <div className="z-20">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-8">
                Вам точно что-то из<br />этого знакомо
              </h2>
            </div>
            {/* Stacking cards vertically on smaller screens */}
            <div className="flex flex-col lg:flex-row w-full">
              {!mobile ? cardData.map((card, index) => (
                <InfoCard key={index} text={card.text} className={card.className} />
              )) : cardDataOne.map((card, index) => (
                <InfoCard key={index} text={card.text} className={card.className} />
              ))}
            </div>
          </div>
          <div className="flex w-full mt-8 lg:mt-0 relative">
            <div className="w-full lg:w-[600px]  h-[300px] lg:h-[500px]"> {/* Adjusted height for mobile */}
              <video
                src={meltVideo}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-xl shadow-lg" // Full width and height
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamiliarSection;
