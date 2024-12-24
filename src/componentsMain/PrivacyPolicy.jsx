import React, { useState } from "react";

const ForFunText = ({ isOpen, onClose, onAccept }) => {
  const [isExpanded, setIsExpanded] = useState(false);

//   if (!isOpen) return null;

  return (
    <div className="fixed mt-10 inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex text-black justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Политика конфиденциальности</h1>
            <button 
              onClick={() => onClose(false)}
              className="text-white "
            >
              ✕
            </button>
          </div>
          
          <div className="text-sm">
            <p className="mb-3 text-black">
              Эта политика конфиденциальности описывает, как мы собираем, используем и защищаем ваши данные, предоставленные на нашем веб-сайте.
            </p>

            <h2 className="text-lg text-black font-semibold mb-2">1. Сбор информации</h2>
            <p className="mb-3 text-black">
              Мы можем собирать информацию, такую как ваше имя, адрес электронной почты, номер телефона и другую личную информацию, когда вы
              взаимодействуете с нашим сайтом.
            </p>

            {isExpanded && (
              <>
                <h2 className="text-lg text-black font-semibold mb-2">2. Использование информации</h2>
                <p className="mb-3 text-black">
                  Ваша информация используется для предоставления услуг, улучшения нашего сайта и обеспечения безопасности ваших данных.
                </p>

                <h2 className="text-lg text-black font-semibold mb-2">3. Защита информации</h2>
                <p className="mb-3 text-black">
                  Мы применяем современные методы безопасности для защиты ваших данных от несанкционированного доступа, изменения или уничтожения.
                </p>

                <h2 className="text-lg font-semibold text-black mb-2">4. Использование файлов Cookie</h2>
                <p className="mb-3 text-black">
                  Мы можем использовать файлы cookie для улучшения работы сайта, анализа трафика и персонализации пользовательского опыта.
                </p>

                <h2 className="text-lg text-black font-semibold mb-2">5. Связь с нами</h2>
                <p className="mb-3 text-black">
                  Если у вас есть вопросы о нашей политике конфиденциальности, вы можете связаться с нами по адресу: support@yourwebsite.com.
                </p>

                <h2 className="text-lg text-black font-semibold mb-2">6. Изменения в политике</h2>
                <p className="mb-3 text-black">
                  Мы оставляем за собой право изменять эту политику конфиденциальности. Пожалуйста, регулярно проверяйте эту страницу на наличие обновлений.
                </p>
              </>
            )}

            <div className="flex text-black flex-col sm:flex-row justify-between items-center gap-4 mt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-4 text-black py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-sm w-full sm:w-auto"
              >
                {isExpanded ? 'Показать меньше' : 'Читать далее'}
              </button>

              <div className="flex text-black gap-4 w-full sm:w-auto">
                <button
                  onClick={onAccept}
                  className="px-4 text-white py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors text-sm w-full sm:w-auto"
                >
                  Принять
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForFunText;