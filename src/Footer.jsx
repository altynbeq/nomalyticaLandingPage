import React from "react";
import footer from './assets/footer.png';
import contacts from './assets/contacts.png';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Import the icons

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
                <div className="flex flex-col text-center justify-center align-center p-10 w-full h-[100%]">
                    <h1 className="font-bold text-2xl mb-8 text-black">Nomolitica</h1>
                    <div className="flex w-[100%] flex-row align-center justify-evenly gap-6 text-black text-xl ">
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

                    {/* Social Media Links */}
                    <div className="flex justify-center flex-row gap-6 mt-6">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-3xl text-black hover:text-[#e4405f]" />
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-3xl text-black hover:text-[#25d366]" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl text-black hover:text-[#0077b5]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
