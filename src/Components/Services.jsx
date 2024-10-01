import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Service Item 1 */}
        <div
          className="service-item flex items-start aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="icon text-primary text-3xl mr-4">
            <i className="bi bi-briefcase"></i>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">
              <a href="#" className="stretched-link">
                Lorem Ipsum
              </a>
            </h4>
            <p className="text-gray-600">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
            </p>
          </div>
        </div>
        {/* End Service Item 1 */}

        {/* Service Item 2 */}
        <div
          className="service-item flex items-start aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="icon text-primary text-3xl mr-4">
            <i className="bi bi-card-checklist"></i>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">
              <a href="#" className="stretched-link">
                Dolor Sitema
              </a>
            </h4>
            <p className="text-gray-600">
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa.
            </p>
          </div>
        </div>
        {/* End Service Item 2 */}

        {/* Service Item 3 */}
        <div
          className="service-item flex items-start aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="icon text-primary text-3xl mr-4">
            <i className="bi bi-bar-chart"></i>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">
              <a href="#" className="stretched-link">
                Sed ut perspiciatis
              </a>
            </h4>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
        </div>
        {/* End Service Item 3 */}
      </div>
    </div>
  );
};

export default Services;
