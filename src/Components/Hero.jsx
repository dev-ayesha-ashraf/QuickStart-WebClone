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
    <section id="hero" className="hero section relative">
  <div className="absolute inset-0">
    <img
      src={bgLight}
      alt="Hero background"
      className="w-full h-full object-cover opacity-40" // Adjust the opacity
    />
    {/* Optional: Add a semi-transparent background */}
    <div className="absolute inset-0 bg-white bg-opacity-40"></div>
  </div>
  <div className="container mx-auto text-center relative z-10">
    <div className="flex flex-col justify-center items-center">
      <h1
        className="text-4xl md:text-6xl font-bold mt-20"
        data-aos="fade-up"
      >
        Welcome to <span className="text-primary">QuickStart</span>
      </h1>
      <p
        className="mt-4 text-lg md:text-xl text-gray-700"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Quickly start your project now and set the stage for success
      </p>
      <div
        className="flex space-x-4 mt-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a
          href="#about"
          className="btn-get-started px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300"
        >
          Get Started
        </a>
        <a
          href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
          className="glightbox flex items-center text-gray-700 hover:text-primary"
        >
          <BiPlayCircle className="text-2xl mr-2" />
          <span>Watch Video</span>
        </a>
      </div>
      <img
        src={serviceImage}
        alt="Hero services"
        className="img-fluid mt-8"
        data-aos="zoom-out"
        data-aos-delay="300"
      />
    </div>
  </div>
</section>

  );
};

export default Hero;
