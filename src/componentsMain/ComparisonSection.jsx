import React from 'react';
import ComparisonCard from './ComparisonCard';
import FeatureList from './FeatureList';
import bg from '../assets/optbg.png';
import nomaLogo from '../assets/nomaLogo.png';

const ComparisonSection = () => {
  const firstNomalyticaFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e", text: "Облачное хранилище с безопасным доступом" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85c5e6c8a2d8a0fc97363a5f8c77ea173dbcfa401761ab3335a9ac6efdce8f75", text: "Автоматическая интеграция с банками" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90bf9b11a181dca885a580b4b7a604c7a2de9eb287beb7c875e7f24fb059b7dd", text: "Планируйте доходы и расходы, избегайте финансовых затруднений благодаря интегрированному календарю платежей." },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5202e6f0e33a202fd9ddbe0713a4846a506f6b0142bae12ce4ee514dc04db6c3", text: "Удалённое управление финансами с любого устройства" },
  ];

  const secondNomalyticaFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e", text: "Легкая настройка аналитики для бизнеса" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e", text: "Поддержка финансовых аналитиков 24/7" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e", text: "Ваши данные хранятся в защищённом облаке, доступ к которому имеют только вы. Это исключает возможность случайной потери или утраты информации." },
  ];

  const firstExcelFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2770429b60cdaf89ed538a79e0d7974fd93b305abb371d9f8bc3d330feebbd72", text: "Проблемы с безопасностью и конфиденциальностью данных" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7f1bfa8223049f240e65a37e798bb8db36dffa2d58ba097ac69aaa5a36d19b5", text: "Сложность анализа больших объёмов данных" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd40031737b10b5d542c8e6fd10e697457568f91bcf90c196d0d61b10e4d3326", text: "Отсутствие поддержки интеграций" },
  ];

  const secondExcelFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2770429b60cdaf89ed538a79e0d7974fd93b305abb371d9f8bc3d330feebbd72", text: "Медленный и устаревший интерфейс для командной работы" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/323124c50c60591df808d101e561345ea02caf60bc22f9f4cfc208cb95a8d173", text: "Отсутствие аналитических инструментов" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7f1bfa8223049f240e65a37e798bb8db36dffa2d58ba097ac69aaa5a36d19b5", text: "Трудности совместного редактирования файлов" },
  ];

  return (
    <section className="flex overflow-hidden justify-center items-center flex-col px-50 pt-3 pb-10 bg-white max-md:px-5 max-md:pb-24 " style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="self-center text-2xl font-medium leading-none text-center text-indigo-950 mt-10">
        Почему Excel не подходит для учета
      </h1>
      <div className="mt-28 flex items-center justify-center max-md:mt-10 max-md:max-w-full">
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
