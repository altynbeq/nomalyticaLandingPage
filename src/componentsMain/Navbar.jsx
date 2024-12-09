import React, { useState } from "react";

export const NavBar = ({ onNavigate, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const NavItem = ({ text, onClick }) => (
    <div
      onClick={onClick}
      className="rounded-[30px] hover:bg-gray-100 transition duration-200 px-3 py-2 cursor-pointer"
    >
      <span className="font-medium text-black text-lg">{text}</span>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          window.scrollY > 10 ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 pl-4">
              <span className="text-2xl font-bold text-[#0f0049]">Nomalytica</span>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <NavItem
                text="О приложении"
                onClick={() => onNavigate(refs.aboutRef)}
              />
              <NavItem
                text="Отзывы"
                onClick={() => onNavigate(refs.problemsRef)}
              />
              <NavItem
                text="Контакты"
                onClick={() => onNavigate(refs.optimizationRef)}
              />
              <NavItem
                text="Тарифы"
                onClick={() => onNavigate(refs.planRef)}
              />
              <button
                onClick={() => setShowModal(true)}
                className="border border-[#0f0049] rounded-[30px] p-2 hover:bg-[#0f0049] hover:text-white transition duration-200"
              >
                Войти
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray">
                {isOpen ? (
                  <span className="font-bold text-xl">&times;</span>
                ) : (
                  <span className="font-bold text-xl">&#9776;</span>
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden mt-4 space-y-4 mr-8">
              <NavItem
                text="О приложении"
                onClick={() => onNavigate(refs.aboutRef)}
              />
              <NavItem
                text="Отзывы"
                onClick={() => onNavigate(refs.problemsRef)}
              />
              <NavItem
                text="Контакты"
                onClick={() => onNavigate(refs.familiarRef)}
              />
              <NavItem
                text="Тарифы"
                onClick={() => onNavigate(refs.planRef)}
              />
              <button
                onClick={() => setShowModal(true)}
                className="w-full border border-[#0f0049] rounded-[30px] p-2 hover:bg-[#0f0049] hover:text-white transition duration-200 "
              >
                Войти
              </button>
            </div>
          )}
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-xl font-bold mb-6 text-center">Вход в систему</h2>
            <form>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Электронная почта
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-3"
                  placeholder="Введите вашу почту"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Пароль</label>
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-3"
                  placeholder="Введите ваш пароль"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-500 border border-blue-500 py-3 px-4 rounded-lg hover:bg-blue-50 transition duration-300"
              >
                Войти
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 text-sm text-gray-500 hover:underline block text-center"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};
