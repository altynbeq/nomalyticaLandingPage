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
