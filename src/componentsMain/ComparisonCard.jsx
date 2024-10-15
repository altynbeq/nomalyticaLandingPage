import React from 'react';
import FeatureList from './FeatureList';

const ComparisonCard = ({ title, logoSrc, features, bgColor }) => {
  return (
    <div className={`flex flex-col font-medium text-indigo-950 max-md:mt-5 max-md:max-w-full ${bgColor} rounded-[30px] pb-11 pl-5 pr-5`}>
      <div className="flex z-10 flex-wrap gap-5 justify-between self-end mt-0 max-w-full text-1xl leading-loose whitespace-nowrap w-[505px]">
        <div className="self-end text-2xl mt-24 max-md:mt-10">{title}</div>
        {logoSrc && <img loading="lazy" src={logoSrc} alt={`${title} logo`} className="object-contain shrink-0 w-32 max-w-full aspect-square" />}
      </div>
      <FeatureList features={features} />
    </div>
  );
};

export default ComparisonCard;