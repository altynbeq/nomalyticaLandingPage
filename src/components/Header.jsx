import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className=" w-screen flex justify-between items-center px-4 py-2 bg-white shadow-md z-50">
      
      <div className="flex items-center">
        <img src="/logonoma.png" alt="Nomalytica" className="h-5" />
      </div>
      
      <div className="hidden lg:flex lg:flex-grow lg:items-start lg:justify-start lg:space-x-8 ml-6 md:text-xs">
        <a href="#about" className="text-black hover:text-blue-600">
          О приложении
        </a>
        <a href="#reviews" className="text-black hover:text-blue-600">
          Отзывы
        </a>
        <a href="#pricing" className="text-black hover:text-blue-600">
          Тарифы
        </a>
        <a href="#contact" className="text-black hover:text-blue-600">
          Контакты
        </a>
      </div>
      
      <div className="hidden lg:flex lg:items-center lg:space-x-4 md:text-xs" >
        <a href="#login" className="text-black hover:text-blue-600">
          Войти
        </a>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
          Записаться на Демо
        </button>
      </div>
      
      <div className="flex items-center lg:hidden">
        <button className="p-2 rounded-full bg-blue-600">
          <FaBars className="text-white w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
