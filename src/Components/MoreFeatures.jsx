import React from 'react';
import featuresImage from '/features-3.jpg'; // Adjust the path to where your image is located

const MoreFeatures = () => {
  const features = [
    {
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias',
      icon: 'bi bi-easel',
    },
    {
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise',
      icon: 'bi bi-patch-check',
    },
    {
      title: 'Dine Pad',
      description: 'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit',
      icon: 'bi bi-brightness-high',
    },
    {
      title: 'Tride Clov',
      description: 'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit',
      icon: 'bi bi-brightness-high',
    },
  ];

  return (
    <section id="more-features" className="more-features section py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-around items-center gap-6">

          {/* Text and Feature List */}
          <div className="col-lg-6 flex flex-col justify-center order-2 lg:order-1" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-3xl font-bold mb-4">Enim quis est voluptatibus aliquid consequatur</h3>
            <p className="mb-8">Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="icon-box flex" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                  <i className={`${feature.icon} text-4xl text-primary flex-shrink-0 mr-4`}></i>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Image */}
          <div className="features-image col-lg-5 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="200">
            <img src={featuresImage} alt="Features" className="w-full h-auto" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
