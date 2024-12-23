import React from 'react';
import ComparisonCard from './ComparisonCard';
import FeatureList from './FeatureList';
import bg from '../assets/optbg.png';
import nomaLogo from '../assets/nomaLogo.png';

const ComparisonSection = () => {
  const firstNomalyticaFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e", text: "Интуитивно понятная платформа с простым интерфейсом для быстрого освоения без необходимости обучать сотрудников" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85c5e6c8a2d8a0fc97363a5f8c77ea173dbcfa401761ab3335a9ac6efdce8f75", text: "Мгновенная синхронизация данных с удаленными офисами и магазинами для актуальной информации в реальном времени" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90bf9b11a181dca885a580b4b7a604c7a2de9eb287beb7c875e7f24fb059b7dd", text: "Автоматизация финансового планирования и бюджетирования для снижения рисков финансовых потерь и ошибок" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5202e6f0e33a202fd9ddbe0713a4846a506f6b0142bae12ce4ee514dc04db6c3", text: "Простой доступ и управление всем бизнесом на одном экране с любого устройства, где бы вы ни находились" },
];

const secondNomalyticaFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e", text: "Поддержка многозадачности для различных бизнес-операций с одним решением, включая управление запасами, сотрудниками и продажами" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e", text: "Быстрая настройка отчетности и аналитики, чтобы ваши бизнес-данные работали на вас и поддерживали правильные решения" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e", text: "Многослойная защита данных с гарантией их безопасности, что позволяет вам сосредоточиться на росте бизнеса, а не на угрозах безопасности" },
];

const firstExcelFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2770429b60cdaf89ed538a79e0d7974fd93b305abb371d9f8bc3d330feebbd72", text: "Нет автоматизации и трудности с обработкой данных вручную, что приводит к задержкам и ошибкам" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7f1bfa8223049f240e65a37e798bb8db36dffa2d58ba097ac69aaa5a36d19b5", text: "Ограниченные возможности для анализа больших объемов данных, что затрудняет принятие обоснованных решений" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd40031737b10b5d542c8e6fd10e697457568f91bcf90c196d0d61b10e4d3326", text: "Отсутствие автоматических интеграций с другими системами, что требует постоянного ввода данных вручную" },
];

const secondExcelFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2770429b60cdaf89ed538a79e0d7974fd93b305abb371d9f8bc3d330feebbd72", text: "Низкая гибкость интерфейса и сложности при масштабировании компании" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/323124c50c60591df808d101e561345ea02caf60bc22f9f4cfc208cb95a8d173", text: "Отсутствие современных инструментов аналитики, что ограничивает возможности для анализа тенденций и принятия данных решений" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7f1bfa8223049f240e65a37e798bb8db36dffa2d58ba097ac69aaa5a36d19b5", text: "Проблемы с синхронизацией и редактированием файлов в реальном времени для командной работы" },
];



  return (
    <section className="flex overflow-hidden justify-center items-center flex-col px-50 pt-16 pb-10 bg-white max-md:px-5 max-md:pb-24" style={{ backgroundImage: `url(${bg})` }}>
      <div className="relative w-full flex justify-center text-center mb-1 py-6 overflow-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 transform -skew-x-12">
            Чем мы лучше, чем другие?
          </h1>
      </div>
      <div className="mt-10 flex items-center justify-center max-md:mt-10 max-md:max-w-full">
        <div className="flex w-[110%] justify-center gap-5 max-md:flex-col max-md:items-center">
          <div className="flex flex-col w-5/12 gap-10 max-md:w-[90%]">
            <ComparisonCard logoSrc={nomaLogo} features={firstNomalyticaFeatures} bgColor="bg-violet-50" />
            <ComparisonCard title="Excel" features={firstExcelFeatures} bgColor="bg-neutral-100" />
          </div>
          <div className="flex flex-col w-5/12 gap-10 max-md:w-[90%]">
            <ComparisonCard title="Excel" features={secondExcelFeatures} bgColor="bg-neutral-100" />
            <ComparisonCard logoSrc={nomaLogo} features={secondNomalyticaFeatures} bgColor="bg-violet-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
