import React from "react";
import plans from "./assets/plans.png";
import tick from "./assets/tick.png";
import bg from './assets/optbg.png';

function Plan3() {
    return (
        <div className="bg-white" style={{ backgroundImage: `url(${bg})` }}>
            
            <div className="bg-purpleforbg w-[98%] mx-auto pb-24 rounded-xl flex px-[10px]  text-inter">
                <div className="ml-32 flex flex-row">
                    <div>
                        <h1 className="text-2xl text-planColor leading-snug w-[63%] mb-16">Дополнительная услуга к тарифам 1 и 2</h1>
                        <img 
                            src={plans} 
                            alt="plans" 
                            className="object-cover h-[50px] rounded-3xl" 
                            style={{ objectFit: 'cover' }} 
                        />
                    </div>
                    <div className=" top-0  right-0">
                        <ul className="list-none mt-1 text-2xl font-light text-textBlue w-[80%]">
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                        </ul>
                        <div className="text-textBlue flex  bottom-0 pb-4">
                            <h1 className="mr-2 text-4xl">299 000</h1>
                            <h1 className="text-xl pt-3">тенге</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan3;
