import React from 'react';
import ComparisonCard from './ComparisonCard';
import FeatureList from './FeatureList';
import bg from '../assets/optbg.png';

const ComparisonSection = () => {
  const nomalyticaFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad0aead550bcde0a9af8160e98061cb44837db850e3d80f4efeb51d2b182792e?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959", text: "Возможность случайно потерять или удалить важные таблицы" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85c5e6c8a2d8a0fc97363a5f8c77ea173dbcfa401761ab3335a9ac6efdce8f75?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959", text: "Возможность случайно потерять или удалить важные таблицы" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90bf9b11a181dca885a580b4b7a604c7a2de9eb287beb7c875e7f24fb059b7dd?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959", text: "Возможность случайно потерять или удалить важные таблицы " },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5202e6f0e33a202fd9ddbe0713a4846a506f6b0142bae12ce4ee514dc04db6c3?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959", text: "Управление финансами бизнеса " }
  ];

  const excelFeatures = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2770429b60cdaf89ed538a79e0d7974fd93b305abb371d9f8bc3d330feebbd72?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959", text: "Возможность случайно потерять или удалить важные таблицы" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/323124c50c60591df808d101e561345ea02caf60bc22f9f4cfc208cb95a8d173?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959", text: "Необходимость тратить много " },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7f1bfa8223049f240e65a37e798bb8db36dffa2d58ba097ac69aaa5a36d19b5?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959", text: "Возможность ошибок и потери" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd40031737b10b5d542c8e6fd10e697457568f91bcf90c196d0d61b10e4d3326?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959", text: "Трудности в составлении и " }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-center flex-col px-20 pt-3 pb-10 bg-white max-md:px-5 max-md:pb-24" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="self-center text-2xl font-medium leading-none text-center text-indigo-950 mt-10">
        Почему Excel не подходит для учета
      </h1>
      <div className="mt-28  flex items-center justify-center max-md:mt-10 max-md:max-w-full">
        <div className="flex  w-[110%] justify-center gap-5 max-md:flex-col max-md:items-center">
          <div className="flex flex-col w-5/12 gap-10 max-md:w-[90%]">
            <ComparisonCard
              title="Nomalytica"
              logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ad411aa885434ef9c669ba4e6ae112b0bd950ab3bf21657df81dad9df24c07a3?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959"
              features={nomalyticaFeatures}
              bgColor="bg-violet-50"
            />
            <ComparisonCard
              title="Excel"
              features={excelFeatures}
              bgColor="bg-neutral-100"
            />
          </div>
          <div className="flex flex-col w-5/12 gap-10 max-md:w-[90%]">
            <ComparisonCard
              title="Excel"
              features={excelFeatures}
              bgColor="bg-neutral-100"
            />
            <ComparisonCard
              title="Nomalytica"
              logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/caaa96e4e183e34da5c47ed543401afa86c1d8041821d76188538a6ed79e328a?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959"
              features={nomalyticaFeatures}
              bgColor="bg-violet-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
