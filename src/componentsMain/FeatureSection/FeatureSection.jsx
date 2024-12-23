import React from "react";
import FeatureImage from "./FeatureImage";
import FeatureContent from "./FeatureContent";
import FeatureImageSecond from '../FeatureTwoSection/SecondImage';
import FeatureContentTwo from '../FeatureTwoSection/SecondContent';
import bg from '../../assets/optbg.png';

function FeatureSection() {
  return (
    <section
      className="flex flex-col min-h-screen items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative w-full flex justify-center text-center mb-1 py-6 overflow-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 transform -skew-x-12">
            Чем мы полезны?
          </h1>
      </div>
      <div className="py-4 w-[80%] justify-center align-center rounded-[30px]">
        {/* First Block */}
        <div className="flex w-full justify-between flex-col-reverse md:flex-row gap-4 md:gap-8">
          <FeatureContentTwo />
          <FeatureImageSecond />
        </div>

        {/* Second Block */}
        <div className="flex w-full justify-between flex-col md:flex-row gap-4 md:gap-8">
          <FeatureImage />
          <FeatureContent />
        </div>

        {/* Third Block */}
        <div className="flex w-full justify-between flex-col-reverse md:flex-row gap-4 md:gap-8">
          <FeatureContentTwo />
          <FeatureImageSecond />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
