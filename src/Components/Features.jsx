import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const featuresData = [
  {
    id: 1,
    title: 'Modi sit est dela pireda nest',
    description: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    icon: 'bi-binoculars',
    image: '/tabs-1.jpg',
  },
  {
    id: 2,
    title: 'Unde praesenti mara setra le',
    description: `Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas.`,
    icon: 'bi-box-seam',
    image: '/tabs-2.jpg',
  },
  {
    id: 3,
    title: 'Pariatur explica nitro dela',
    description: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Debitis nulla est maxime voluptas dolor aut.`,
    icon: 'bi-brightness-high',
    image: '/tabs-3.jpg',
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="features" className="features section py-[60px]">
      <SectionTitle
        title="Features"
        description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <div className="container min-[800px]:w-[87vw] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 d-flex align-items-center">
            <ul className="flex flex-col items-start md:items-center aos-init aos-animate lg:w-[85%]" data-aos="fade-up" data-aos-delay="100" role="tablist">
              {featuresData.map((feature) => (
                <li className="mb-4 md:mb-[15px] md:mr-4" role="presentation" key={feature.id}>
                  <button
                    className={`p-[30px] flex items-start md:items-center space-x-2 p-4 rounded-lg transition-colors ${activeTab === feature.id ? 'bg-[#f8fbfc] text-gray-900' : 'bg-white text-gray-700'
                      } hover:bg-[#f8fbfc]`}
                    onClick={() => setActiveTab(feature.id)}
                    role="tab"
                    aria-selected={activeTab === feature.id}
                  >
                    <div>
                    <i className={`bi ${feature.icon} text-xl `}></i>
                    </div>
                   
                    <div className='text-left'>
                      <h4 className="hidden lg:block text-xl font-bold font-nunito mb-[10px]">{feature.title}</h4>
                      <p className="text-[15px]">{feature.description}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>

          </div>

          <div className="lg:w-1/2">
            <div className="tab-content">
              {featuresData.map((feature) => (
                <div
                  className={`tab-pane fade ${activeTab === feature.id ? 'active show' : ''}`}
                  id={`features-tab-${feature.id}`}
                  role="tabpanel"
                  key={feature.id}
                  style={{ display: activeTab === feature.id ? 'block' : 'none' }} // Ensure only active tab is displayed
                >
                  <img src={feature.image} alt="" className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
