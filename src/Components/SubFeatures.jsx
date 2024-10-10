import React from 'react';

const SubFeatures = () => {
  return (
    <div className="container mx-auto px-4 min-[800px]:w-[87vw]">

      
      <div className="flex flex-col md:flex-row justify-between mb-8 mx-auto">

        <div className="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-up" data-aos-delay="100">
          <img src="/features-1.jpg" className="w-full rounded-[15px]" alt="Feature 1" />
        </div>

        <div className="w-full md:w-2/5 p-6 rounded-lg bg-[#f8fbfc] flex items-start md:items-center" data-aos="fade-up" data-aos-delay="200">
          <div className="content">
            <h3 className="text-2xl text-[#3d4348] font-bold font-nunito mb-4">Corporis temporibus maiores provident</h3>
            <p className="mb-4 text-gray-500">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center bg-[#388da8] text-contrast font-heading font-medium text-[16px] tracking-[1px] py-[12px] px-[24px] rounded transition duration-300 hover:bg-[#4ea2bc]"
            >
              <span className='text-white'>Learn More</span>
            </a>
          </div>
        </div>

      </div>


      <div className="flex flex-col md:flex-row justify-between mb-8">

        <div className="w-full md:w-2/5 p-6 order-2 md:order-1 rounded-lg bg-[#f8fbfc] flex items-start md:items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="content">
            <h3 className="text-2xl text-[#3d4348] font-bold font-nunito mb-4">Neque ipsum omnis sapiente quod quia dicta</h3>
            <p className="mb-4 text-gray-500">
              Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares
            </p>
            <ul className="mb-4">
              <li className="mb-2 flex items-center text-gray-500"><i className="bi bi-easel mr-2"></i> Et corporis ea eveniet ducimus.</li>
              <li className="mb-2 flex items-center text-gray-500"><i className="bi bi-patch-check mr-2"></i> Exercitationem dolorem sapiente.</li>
              <li className="mb-2 flex items-center text-gray-500"><i className="bi bi-brightness-high mr-2"></i> Veniam quia modi magnam.</li>
            </ul>
            <a
              href="#"
              className="text-white mt-4 inline-flex items-center justify-center bg-[#388da8] text-contrast font-heading font-medium text-[16px] tracking-[1px] py-[12px] px-[24px] rounded transition duration-300 hover:bg-[#4ea2bc]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 mb-4 md:mb-0" data-aos="fade-up" data-aos-delay="200">
          <img src="/features-2.jpg" className="w-full rounded-[15px]" alt="Feature 2" />
        </div>

      </div>

    </div>
  );
};

export default SubFeatures;
