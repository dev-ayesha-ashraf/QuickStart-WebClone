import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.css';
import { BiPlayCircle } from 'react-icons/bi';
import ReactGA from 'react-ga4';

// Image paths (adjust depending on where your images are located)
const bgLight = "/hero-bg-light.webp"; // If in public folder
const serviceImage = "/hero-services-img.webp"; // If in public folder

const Home = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    // Send pageview (React GA4 syntax)
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  // Google Analytics event handlers
  const handleGetStartedClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Click Get Started',
      label: 'Hero Section',
    });
  };

  const handleWatchVideoClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Click Watch Video',
      label: 'Hero Section',
    });
  };

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
            <span className="text-5xl leading-[56px]">Welcome to </span>
            <span className="text-[#388da8] text-5xl leading-[56px]">QuickStart</span>
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
              onClick={handleGetStartedClick}
              className="px-7 py-2 font-nunito bg-[#388da8] text-white font-medium text-[15px] tracking-wider inline-block rounded-full transition-all duration-500 shadow-[0_8px_28px_rgba(0,0,0,0.1)] hover:bg-[#4ea2bc]"
            >
              Get Started
            </a>

            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              onClick={handleWatchVideoClick}
              className="glightbox flex items-center text-gray-700 hover:text-primary"
              target="_blank" rel="noopener noreferrer"
            >
              <BiPlayCircle className="text-[32px] mr-2 text-[#388da8]" />
              <span className="watch text-[#3d4348] text-base font-semibold hover:text-[#388da8]">
                Watch Video
              </span>
            </a>
          </div>

          <img
            src={serviceImage}
            alt="Hero services"
            className="img-fluid w-[600px] mt-8"
            data-aos="zoom-out"
            data-aos-delay="300"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
