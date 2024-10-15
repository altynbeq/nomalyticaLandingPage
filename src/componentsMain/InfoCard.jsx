import React from 'react';

const InfoCard = ({ imageSrc, text }) => (
  <div className="flex flex-col pt-5 pr-5 pb-11 pl-12 max-w-full bg-white rounded-[30px] w-[414px] max-md:pl-5">
    <img loading="lazy" src={imageSrc} alt="" className="object-contain self-end w-7 aspect-square" />
    <p className="self-start text-2xl tracking-wide leading-9">{text}</p>
  </div>
);

export default InfoCard;