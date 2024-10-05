import React from 'react';

const FeaturedServices = () => {
  const services = [
    {
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
      icon: 'bi bi-briefcase',
      delay: 100,
    },
    {
      title: 'Dolor Sitema',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa',
      icon: 'bi bi-card-checklist',
      delay: 200,
    },
    {
      title: 'Sed ut perspiciatis',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
      icon: 'bi bi-bar-chart',
      delay: 300,
    },
  ];

  return (
    <section id="featured-services" className="featured-services section light-background bg-[#f8fbfc] pt-[40px] pb-[40px]">
      <div className="container mx-auto px-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 pt-[20px] min-[800px]:w-[87vw] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`aos-init aos-animate`}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-item flex">
                <div className="icon flex-shrink-0">
                  <i className={service.icon}></i>
                </div>
                <div className="ml-4">
                  <h4 className="title font-bold mb-[5px] text-lg font-nunito">
                    <a href="#" className="stretched-link">
                      {service.title}
                    </a>
                  </h4>
                  <p className="description text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
          {/* End Service Item */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
