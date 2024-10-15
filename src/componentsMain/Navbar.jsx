import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavItem = ({ text }) => (
  <div className="rounded-[30px] hover:bg-gray-100 transition duration-200 px-3 py-2">
    <span className="font-medium text-black text-lg">{text}</span>
  </div>
);

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Close the mobile menu when resizing back to large screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Close mobile menu on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        window.scrollY > 10 ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#0f0049]">Лого</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavItem text="О приложении" />
            <NavItem text="Отзывы" />
            <NavItem text="Контакты" />
            <NavItem text="Тарифы" />
            <button className="border border-[#0f0049] rounded-[30px] text-white p-2 hover:bg-[#0f0049] hover:text-white transition duration-200">
              Войти
            </button>
            {/* <button className="bg-[#142c6b] rounded-[30px] p-2 hover:bg-[#0f0049] transition duration-200">
              <span className="text-white font-semibold">Записаться на Демо</span>
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && windowWidth < 1024 && (
          <div className="lg:hidden mt-4 space-y-4">
            <NavItem text="О приложении" />
            <NavItem text="Отзывы" />
            <NavItem text="Контакты" />
            <NavItem text="Тарифы" />
            <button className="w-full border border-[#0f0049] rounded-[30px] p-2 hover:bg-[#0f0049] hover:text-white transition duration-200">
              Войти
            </button>
            <button className="w-full bg-[#142c6b] rounded-[30px] p-2 hover:bg-[#0f0049] transition duration-200">
              <span className="text-white font-semibold">Записаться на Демо</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
