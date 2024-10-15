import React from "react";

function Near() {
    return (
        <div className="bg-white">
            <div className="bg-purpleforbg w-[98%] mx-auto pb-24 rounded-xl">
                <div className=" text-blueText flex justify-center sm:text-center mb-20 pt-20">
                    <h1>Мы к вам ближе, чем другие</h1>
                </div>
                <div className="grid sm:grid-cols-1 grid-cols-3 gap-32 text-blueText w-[90%] sm:w-[70%] mx-auto text-4xl sm:text-center sm:text-xl">
                    <div>
                        <div className="bg-white w-[30px] h-[30px] rounded-full mb-14 sm:mx-auto"></div>
                        <h1 className="font-medium mb-8 text-2xl">Мы знаем все тонкости казахстанского бизнеса</h1>
                        <p className="font-thin text-2xl sm:text-sm">Как местная компания, мы лучше других понимаем все особенности ведения бизнеса в Казахстане.</p>
                    </div>
                    <div>
                        <div className="bg-white w-[30px] h-[30px] rounded-full mb-14 sm:mx-auto"></div>
                        <h1 className="font-medium mb-8 text-2xl">Мы говорим с вашим бухгалтером на одном языке</h1>
                        <p className="font-thin text-2xl sm:text-sm">Мы разбираемся в местном законодательстве и налогах, понимаем ваши задачи.</p>
                    </div>
                    <div>
                        <div className="bg-white w-[30px] h-[30px] rounded-full mb-14 sm:mx-auto"></div>
                        <h1 className="font-medium mb-8 text-2xl">Мы всегда на связи и готовы встретиться лично</h1>
                        <p className="font-thin text-2xl sm:text-sm">Без часовых разниц, мы всегда готовы обсудить все вопросы в удобное для вас время.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Near;
