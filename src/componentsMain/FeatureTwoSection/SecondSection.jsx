import React from "react";
import FeatureImage from "./SecondImage";
import FeatureContent from "./SecondContent";
import bg from '../../assets/optbg.png';

function SecondSection() {
  return (
    <section  className="flex flex-col h-screen items-center justify-center  text-center bg-cover bg-center">
      <div className="py-4 w-[80%] justify-center align-center bg-white rounded-[30px] " style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex w-full justify-between">
          <FeatureContent />
          <FeatureImage />
        </div>
      </div>
    </section>
  );
}

export default SecondSection;