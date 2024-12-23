import React from "react";
import optbg from './assets/optbg.png';
import bg from './assets/optbg.png';
// import { AnimatedBeam } from './componentsMain/AnimatedBeam';

function Optimization() {
    return (
        <div 
            className="flex flex-col h-screen items-center justify-center px-4 py-10 text-center bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="flex flex-col items-center justify-center w-full bg-center bg-no-repeat">
                <h1 className="text-black font-inter text-4xl w-[90%] max-w-3xl mb-8 mt-8
                               md:text-6xl sm:text-4xl">
                    Оптимизируйте финансовые процессы с Nomalytica
                </h1>
                {/* <AnimatedBeam /> */}
                <p className="font-light text-lg w-[90%] max-w-2xl mb-8 text-black
                              md:text-xl sm:text-base">
                    Оставьте заявку на бесплатную консультацию и узнайте, как Nomalytica может улучшить ваше управление бизнесом
                </p>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
                    <button className="bg-customBlue text-white rounded-full text-base md:text-lg px-6 py-3">
                        Оставить заявку
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Optimization;
