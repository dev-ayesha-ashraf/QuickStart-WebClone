import React from 'react';

const SectionTitle = ({ title, description }) => {
  return (
    <div className="container section-title aos-init aos-animate pt-[60px]" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center font-nunito text-[#3d4348] pb-[20px]">{title}</h2>
      <div className='block w-[50px] h-[3px] bg-[#388da8] m-auto'></div>
      <p className="mt-2 text-gray-600 text-center font-nunito text-[#3d4348] pb-[60px]">{description}</p>
    </div>
  );
};

export default SectionTitle;
