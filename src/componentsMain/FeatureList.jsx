import React from 'react';

const FeatureList = ({ features }) => {
  return (
    <div className="flex flex-col items-start p-5 w-full text-md tracking-wide leading-8 bg-white rounded-3xl  max-md:max-w-full">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-row border-b-1 w-full  border-gray  justify-start align-center ">
          <img loading="lazy" src={feature.icon} alt="" className="object-contain mt-3 mr-2 self-start aspect-square w-[10px]" />
          <div className=" text-[14px] max-md:max-w-full">
            {feature.text}
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;