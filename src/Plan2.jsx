import React from "react";
import bg from "./assets/optbg.png";
import tick from "./assets/tick.png";

function Plan2() {
    return (
        <div className="bg-white" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="self-center pb-10 text-2xl font-medium leading-none text-center text-indigo-950 mt-10">
                
            </h1>
            <div className="bg-purpleforbg w-[98%] mt-20 mx-auto pb-24 rounded-xl flex flex-col md:flex-row gap-12 px-4 md:px-[60px] justify-center items-center text-inter">
                {/* Basic Plan */}
                <div className="bg-white border border-gray-300 shadow-lg w-[90%] md:w-[30%] flex flex-col h-auto md:h-[550px] mt-12 pt-12 rounded-3xl relative">
                    <div className="w-[60%] ml-5 p-1 px-1 border-textBlue text-textBlue rounded-full text-[10px] flex items-left justify-left">
                        <h1 className="text-black text-2xl">Базовый</h1>
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
                        <h1 className="text-black text-2xl">Сопровождение</h1>
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
                        <h1 className="text-black text-2xl">Премиум</h1>
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
            <div className="bg-purpleforbg w-[100%] mx-auto pb-24 rounded-xl flex flex-col md:flex-row px-4 text-inter">
                <div className="ml-4 md:ml-32 flex flex-col md:flex-row">
                    <div className="w-full md:w-[50%]">
                        <h1 className="text-2xl text-black leading-snug mb-4 md:mb-16">
                            Дополнительная услуга к тарифам 1 и 2
                        </h1>
                        <div className="flex justify-between items-center w-full px-8">
                            <button
                                className="flex-1 mx-4 px-8 py-5 text-xl border border-blue-700 text-blue-700 bg-white rounded-full transform rotate-[-10deg] shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 animate-wiggle"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Базовый
                            </button>
                            <button
                                className="flex-1 mx-4 px-8 py-5 text-xl border border-blue-700 text-blue-700 bg-white rounded-full transform rotate-[10deg] shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 animate-wiggle"
                                style={{ animationDelay: "0.3s" }}
                            >
                                Сопровождение
                            </button>
                            <button
                                className="flex-1 mx-4 px-8 py-5 text-xl border border-blue-700 text-blue-700 bg-white rounded-full transform rotate-[-5deg] shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 animate-wiggle"
                                style={{ animationDelay: "0.5s" }}
                            >
                                Премиум
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 w-full md:w-[50%]">
                        <div className="text-textBlue flex text-black pb-4 ml-6">
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
