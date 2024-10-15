import React from "react";
import bg from './assets/optbg.png';
import plans from './assets/plans.png'
import tick from './assets/tick.png'

function Plan2() {
    return (
        <div className="bg-white" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="self-center pb-10 text-2xl font-medium leading-none text-center text-indigo-950 mt-10">
                Почему Excel не подходит для учета
            </h1>
            <div className="bg-purpleforbg w-[98%] mt-20 mx-auto pb-24 rounded-xl flex flex-col md:flex-row gap-12 px-4 md:px-[60px] justify-center items-center text-inter">
                <div className="bg-white border border-gray-300 shadow-lg w-[90%] md:w-[30%] flex  flex-col h-auto md:h-[510px] mt-12 pt-12 rounded-3xl relative">
                    <div className="w-[60%] ml-5  p-1 px-1 border-textBlue text-textBlue rounded-full  text-[10px] flex items-left justify-left">
                        <h1 className="text-black text-2xl">Базовый</h1>
                    </div>
                    <div>
                        <ul className="list-none ml-8 md:ml-8 mt-8 md:mt-16 text-1xl font-light text-textBlue w-[80%]">
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Консультации по техническим вопросам
                            </li>
                        </ul>
                    </div>
                    <div className="ml-8 mt-4">
                        <div className="text-customBlue">
                            <h1 className="text-black text-[20px]">49 000 тг/мес</h1>
                        </div>
                        <button className="mt-4 ml-20 md:ml-40 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            Узнать больше
                        </button>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 shadow-lg w-[90%] md:w-[30%] flex  flex-col h-auto md:h-[510px] mt-12 pt-12 rounded-3xl relative">
                    <div className="w-[60%] ml-5  p-1 px-1 border-textBlue text-textBlue rounded-full  text-[10px] flex items-left justify-left">
                        <h1 className="text-black text-2xl">Базовый</h1>
                    </div>
                    <div>
                        <ul className="list-none ml-8 md:ml-8 mt-8 md:mt-16 text-1xl font-light text-textBlue w-[80%]">
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Консультации по техническим вопросам
                            </li>
                        </ul>
                    </div>
                    <div className="ml-8 mt-4">
                        <div className="text-customBlue">
                            <h1 className="text-black text-[20px]">49 000 тг/мес</h1>
                        </div>
                        <button className="mt-4 ml-20 md:ml-40 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            Узнать больше
                        </button>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 shadow-lg w-[90%] md:w-[30%] flex  flex-col h-auto md:h-[510px] mt-12 pt-12 rounded-3xl relative">
                    <div className="w-[60%] ml-5  p-1 px-1 border-textBlue text-textBlue rounded-full  text-[10px] flex items-left justify-left">
                        <h1 className="text-black text-2xl">Базовый</h1>
                    </div>
                    <div>
                        <ul className="list-none ml-8 md:ml-8 mt-8 md:mt-16 text-1xl font-light text-textBlue w-[80%]">
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Консультации по техническим вопросам
                            </li>
                        </ul>
                    </div>
                    <div className="ml-8 mt-4">
                        <div className="text-customBlue">
                            <h1 className="text-black text-[20px]">49 000 тг/мес</h1>
                        </div>
                        <button className="mt-4 ml-20 md:ml-40 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            Узнать больше
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-purpleforbg w-[98%] mx-auto pb-24 rounded-xl flex flex-col md:flex-row px-4 text-inter">
                <div className="ml-4 md:ml-32 flex flex-col md:flex-row">
                    <div className="w-full md:w-[50%]">
                        <h1 className="text-2xl text-black leading-snug mb-4 md:mb-16">
                            Дополнительная услуга к тарифам 1 и 2
                        </h1>
                        <img 
                            src={plans} 
                            alt="plans" 
                            className="object-cover h-[50px] rounded-3xl" 
                            style={{ objectFit: 'cover' }} 
                        />
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-[50%]">
                        {/* <ul className="list-none text-2xl font-light text-textBlue">
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                        </ul> */}
                        <div className="text-textBlue flex text-black pb-4">
                            <h1 className="mr-2 text-4xl">299 000</h1>
                            <h1 className="text-xl pt-3">тенге</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan2;
