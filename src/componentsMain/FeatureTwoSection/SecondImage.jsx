import React from "react";
import firstman from "../../assets/firstman.png";
import cluster from "../../assets/claster.png";

function FeatureImageSecond() {
  return (
    <div className="flex flex-col w-8/12 max-md:ml-0 max-md:w-full">
      <div className="flex rounded-7xl relative flex-col grow px-4 pt-52 pb-20 min-h-[70px] max-md:pt-24 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={firstman} // Заменено на локальное изображение
          alt="First Man"
          className="object-cover rounded-3xl absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src={cluster} // Заменено на кластер
          alt="Cluster"
          className="object-contain z-10 w-full aspect-[1.53] max-md:max-w-full"
        />
      </div>
    </div>
  );
}

export default FeatureImageSecond;

