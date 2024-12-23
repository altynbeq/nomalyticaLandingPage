import React from "react";
import bg from "./assets/optbg.png";
import tick from "./assets/tick.png";

function Plan2() {
    return (
        <div className="bg-white mt-20" style={{ backgroundImage: `url(${bg})` }}>
            <div className="relative w-full flex justify-center text-center mb-1 py-6 overflow-hidden">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 transform -skew-x-12">
                    Цены
                </h1>
            </div>
            <div className="bg-purpleforbg w-[98%] mt-4 mx-auto pb-24 rounded-xl flex flex-col md:flex-row gap-12 px-4 md:px-[60px] justify-center items-center text-inter">
                {/* Basic Plan */}
                <div className="bg-white border border-gray-300 shadow-lg w-[90%] md:w-[30%] flex flex-col h-auto md:h-[550px] mt-12 pt-12 rounded-3xl relative">
                    <div className="w-[60%] ml-5 p-1 px-1 border-textBlue text-textBlue rounded-full text-[10px] flex items-left justify-left">
                        <button
                            className="flex-1 mx-4 px-2 py-2 text-xl border border-blue-700 text-blue-700 bg-white rounded-full transform rotate-[-10deg] shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 animate-wiggle"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Базовый
                        </button>
                    </div>
                    <div>
                        <ul className="list-none ml-8 md:ml-8 mt-8 md:mt-16 text-1xl font-light text-textBlue w-[80%]">
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к Nomalytica
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
                        <button className="mt-4 ml-20 md:ml-32 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            Узнать больше
                        </button>
                    </div>
                </div>

                {/* Сопровождение Plan */}
                <div className="bg-white border border-gray-300 shadow-lg w-[90%] md:w-[30%] flex flex-col h-auto md:h-[550px] mt-12 pt-12 rounded-3xl relative">
                    <div className="w-[60%] ml-5 p-1 px-1 border-textBlue text-textBlue rounded-full text-[10px] flex items-left justify-left">
                        <button
                            className="flex-1 mx-4 px-2 py-2 text-xl border border-blue-700 text-blue-700 bg-white rounded-full transform rotate-[-10deg] shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 animate-wiggle"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Сопровождение
                        </button>
                    </div>
                    <div>
                        <ul className="list-none ml-8 md:ml-8 mt-8 md:mt-16 text-1xl font-light text-textBlue w-[80%]">
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к Nomalytica
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Полное сопровождение Финансового аналитика (консультации - 8 часов в месяц)
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Индивидуальные консультации по техническим вопросам
                            </li>
                        </ul>
                    </div>
                    <div className="ml-8 mt-4">
                        <div className="text-customBlue">
                            <h1 className="text-black text-[20px]">79 000 тг/мес</h1>
                        </div>
                        <button className="mt-4 ml-20 md:ml-32 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            Узнать больше
                        </button>
                    </div>
                </div>

                {/* Premium Plan */}
                <div className="bg-white border border-gray-300 shadow-lg w-[90%] md:w-[30%] flex flex-col h-auto md:h-[550px] mt-12 pt-12 rounded-3xl relative">
                    <div className="w-[60%] ml-5 p-1 px-1 border-textBlue text-textBlue rounded-full text-[10px] flex items-left justify-left">
                        <button
                            className="flex-1 mx-4 px-2 py-2 text-xl border border-blue-700 text-blue-700 bg-white rounded-full transform rotate-[-10deg] shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 animate-wiggle"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Премиум
                        </button>
                    </div>
                    <div>
                        <ul className="list-none ml-8 md:ml-8 mt-8 md:mt-16 text-1xl font-light text-textBlue w-[80%]">
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к Nomalytica
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Расширенное сопровождение Финансового аналитика (консультации - 12 часов в месяц)
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Приоритетная техническая поддержка
                            </li>
                            <li className="flex text-black items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Индивидуальная настройка и обучение
                            </li>
                        </ul>
                    </div>
                    <div className="ml-8 mt-4">
                        <div className="text-customBlue">
                            <h1 className="text-black text-[20px]">129 000 тг/мес</h1>
                        </div>
                        <button className="mt-4 ml-20 md:ml-24 mb-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            Узнать больше
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional Service Buttons */}
            <div className="bg-purpleforbg w-[100%] text-center justify-center  rounded-xl flex flex-col md:flex-row px-4 text-inter">
                <div className="ml-4  flex flex-col md:flex-row">
                    <div className="w-full justify-center text-center items-center flex flex-col md:w-[100%]">
                        <h1 className="text-2xl text-black leading-snug mb-4 md:mb-6">
                            Дополнительная услуга к тарифам 1 и 2
                        </h1>
                        <div className="flex justify-center text-center items-center w-[90%] md:w-[60%] px-8">
                            <button
                                className="flex-1 mx-4 px-8 py-5 text-xl border border-blue-700 text-blue-700 bg-white rounded-full transform rotate-[-10deg] shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 animate-wiggle"
                                style={{ animationDelay: "0.1s" }}
                            >
                                299 000 ₸
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan2;
