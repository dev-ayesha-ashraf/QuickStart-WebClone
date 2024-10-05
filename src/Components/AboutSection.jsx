import React from 'react';
import aboutImageOne from "/about-company-1.jpg"
import aboutImageTwo from "/about-company-2.jpg"
import aboutImageThree from "/about-company-3.jpg"


const AboutSection = () => {
  return (
    <section id="about" className="about section py-16">
      <div className="container mx-auto px-[40px]">
        <div className="flex flex-col lg:flex-row gap-4 min-[800px]:w-[87vw] mx-auto">

          <div className="lg:w-1/2 content aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <p className="who mb-[15px] text-[#3d4348]">WHO WE ARE</p>
            <h3 className="text-3xl font-bold mt-2 font-nunito text-[#3e5055]">Unleashing Potential with Creative Strategy</h3>
            <p className="italic mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul className="list-disc mt-4">
              <li className="flex items-start">
                <i className="bi bi-check-circle text-xl mr-2"></i>
                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </li>
              <li className="flex items-start mt-2">
                <i className="bi bi-check-circle text-xl mr-2"></i>
                <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
              </li>
              <li className="flex items-start mt-2">
                <i className="bi bi-check-circle text-xl mr-2"></i>
                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center bg-[#388da8] text-contrast font-heading font-medium text-[16px] tracking-[1px] py-[12px] px-[24px] rounded transition duration-300 hover:bg-[#4ea2bc]"
            >
              <span className='text-white'>Read More</span>
              <i className="bi bi-arrow-right ml-2 text-white"></i>
            </a>
          </div>

          <div className="lg:w-1/2 about-images aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="flex gap-4 max-[960px]:flex-wrap">
              <div className="w-1/2 max-[960px]:w-full ">
                <img src={aboutImageOne} className="img-fluid rounded-lg max-[960px]:w-full max-[960px]:h-[400px]" alt="About Company 1" />
              </div>
              <div className="w-1/2 max-[960px]:w-full ">
                <div className="flex flex-col gap-4">
                  <div className="w-full">
                    <img src={aboutImageTwo} className="img-fluid rounded-lg max-[960px]:w-full max-[960px]:h-[400px]" alt="About Company 2" />
                  </div>
                  <div className="w-full">
                    <img src={aboutImageThree} className="img-fluid rounded-lg max-[960px]:w-full max-[960px]:h-[400px]" alt="About Company 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
