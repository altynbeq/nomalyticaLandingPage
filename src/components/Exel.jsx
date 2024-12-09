import React from 'react';

const Exel = () => {
  return (
    <div className="w-full bg-[#F6F6F9] py-8">
      <div className="mx-auto px-4">
        {/* Заголовок */}
        <h1 className="text-[#25195C] text-2xl md:text-3xl font-bold text-center mb-16">
          Почему Excel не подходит для учета
        </h1>

        {/* Первая пара блоков */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {/* Первый блок Nomalytica */}
          <div className="bg-white p-4 rounded-2xl shadow-md flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#25195C] text-lg font-semibold">Nomalytica</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2 relative pb-4 border-b border-gray-300">
                <div className="relative w-4 h-4 bg-green-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Безопасное облачное хранилище данных, гарантирующее конфиденциальность
                </p>
              </li>
              <li className="flex items-start space-x-2 relative pb-4 border-b border-gray-300">
                <div className="relative w-4 h-4 bg-green-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Автоматическая синхронизация платежей с банковскими счетами и платежными системами
                </p>
              </li>
              <li className="flex items-start space-x-2 relative pb-4">
                <div className="relative w-4 h-4 bg-green-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Планирование доходов и расходов для предотвращения финансовых затруднений через календарь платежей
                </p>
              </li>
            </ul>
          </div>

          {/* Первый блок Excel */}
          <div className="bg-white p-4 rounded-2xl shadow-md flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#25195C] text-lg font-semibold">Excel</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2 relative pb-4 border-b border-gray-300">
                <div className="relative w-4 h-4 bg-red-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Возможность случайно потерять или удалить важные таблицы
                </p>
              </li>
              <li className="flex items-start space-x-2 relative pb-4 border-b border-gray-300">
                <div className="relative w-4 h-4 bg-red-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Необходимость тратить много времени на анализ больших объемов данных
                </p>
              </li>
              <li className="flex items-start space-x-2 relative pb-4">
                <div className="relative w-4 h-4 bg-red-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Возможность ошибок и потери данных при ручном вводе
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Вторая пара блоков */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-10">
          {/* Второй блок Nomalytica */}
          <div className="bg-white p-4 rounded-2xl shadow-md flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#25195C] text-lg font-semibold">Nomalytica</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2 relative pb-4 border-b border-gray-300">
                <div className="relative w-4 h-4 bg-green-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Интеграция с внешними сервисами для автоматизации учёта
                </p>
              </li>
              <li className="flex items-start space-x-2 relative pb-4">
                <div className="relative w-4 h-4 bg-green-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Удобный интерфейс с возможностью персонализации
                </p>
              </li>
            </ul>
          </div>

          {/* Второй блок Excel */}
          <div className="bg-white p-4 rounded-2xl shadow-md flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#25195C] text-lg font-semibold">Excel</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2 relative pb-4 border-b border-gray-300">
                <div className="relative w-4 h-4 bg-red-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Отсутствие интеграций для автоматизации
                </p>
              </li>
              <li className="flex items-start space-x-2 relative pb-4">
                <div className="relative w-4 h-4 bg-red-300 rounded-full flex-shrink-0">
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <p className="text-sm text-[#25195C] leading-tight">
                  Сложный интерфейс для новичков
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exel;
