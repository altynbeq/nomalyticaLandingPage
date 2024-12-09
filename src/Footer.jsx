import React from "react";
import footer from './assets/footer.png';
import contacts from './assets/contacts.png';

function Footer() {
    const textContainerStyle = {
        backgroundImage: `url(${footer})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',  
        width: '100%',  
    };

    return (
        <div className="h-[300px]">
            <div className="text-inter text-2xl" style={textContainerStyle}>
                <div className="flex flex-col justify-center align-center p-10 w-full  h-[100%]">
                    <h1 className="font-bold text-2xl mb-8 text-black">Nomalytica support</h1>
                    <div className="flex flex-row gap-6  text-black  text-xl w-[55%]">
                        <ul className="leading-loose">
                            <li>Для крупного бизнеса</li>
                        </ul>
                        <ul className="leading-loose">
                            <li>Для среднего бизнеса</li>
                            <li>Для малого бизнеса</li>
                            <li>Партнёрам</li>
                        </ul>
                        <ul className="leading-loose">
                            <li>О нас</li>
                            <li>Обратная связь</li>
                        </ul>
                    </div>

                    {/* Wrap the content in flex-row container */}
                    {/* <div className="flex flex-row  items-center">
                        
                        <img 
                            src={contacts} 
                            alt="contacts" 
                            className="object-cover  rounded-3xl" 
                            style={{ objectFit: 'cover' }} 
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
