import React from "react";
import secondman from "../../assets/secondman.png";

function FeatureImage() {
  return (
    <div className="flex flex-col w-8/12 max-md:ml-0 max-md:w-full">
      <div className="flex rounded-7xl relative flex-col grow px-4 pt-52 pb-20 min-h-[370px] max-md:pt-24 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={secondman} // Заменено на secondman.png
          alt=""
          className="object-cover rounded-3xl absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a77b65e356b40691bcb788e2be6cca5d137455f19ebfc48f1edf02aca52aacb?placeholderIfAbsent=true&apiKey=812f7b4646574e46a3e1505866319959"
          alt=""
          className="object-contain z-10 w-full aspect-[1.53] max-md:max-w-full"
        />
      </div>
    </div>
  );
}

export default FeatureImage;
