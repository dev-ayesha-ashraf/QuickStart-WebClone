import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.css';
import { BiPlayCircle } from 'react-icons/bi';
import bgLight from "/hero-bg-light.webp"
import serviceImage from "/hero-services-img.webp"


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section id="hero" className="hero section relative pt-[180px] pb-[40px]">
      <div className="absolute inset-0">
        <img
          src={bgLight}
          alt="Hero background"
          className="w-full h-full object-cover opacity-25"
        />
       
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="md:text-6xl font-bold font-nunito text-[#3e5055]"
            data-aos="fade-up"
          >
            <span className='text-5xl leading-[56px]'>
              Welcome to
            </span>  <span className="text-[#388da8] text-5xl leading-[56px]">QuickStart</span>
          </h1>
          <p
            className="start mt-[5px] mb-[30px] text-xl font-normal md:text-xl text-gray-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Quickly start your project now and set the stage for success
          </p>
          <div
            className="flex space-x-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="#about"
              className="px-7 py-2 font-nunito bg-[#388da8] text-[#ffff] font-medium text-[15px] tracking-wider inline-block rounded-full transition-all duration-500 shadow-[0_8px_28px_rgba(0,0,0,0.1)] hover:bg-[#4ea2bc]"
            >
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox flex items-center text-gray-700 hover:text-primary"
            >
              <BiPlayCircle className="text-[32px] mr-2 text-[#388da8]" />
              <span className='watch text-[##3d4348] text-base font-semibold hover:text-[#388da8]'>Watch Video</span>
            </a>
          </div>
          <img
            src={serviceImage}
            alt="Hero services"
            className="img-fluid w-[600px]"
            data-aos="zoom-out"
            data-aos-delay="300"
          />
        </div>
      </div>
    </section>

  );
};

export default Hero;
