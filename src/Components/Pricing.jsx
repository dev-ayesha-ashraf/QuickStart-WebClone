import React from 'react';
import SectionTitle from './SectionTitle'; // Adjust the import based on your folder structure

const Pricing = () => {
  // JSON data for pricing
  const pricingData = [
    {
      title: "Free Plan",
      description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
      price: 0,
      popular: false,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
        "Voluptate id voluptas qui sed aperiam rerum",
        "Iure nihil dolores recusandae odit voluptatibus"
      ]
    },
    {
      title: "Business Plan",
      description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
      price: 29,
      popular: true,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
        "Voluptate id voluptas qui sed aperiam rerum",
        "Iure nihil dolores recusandae odit voluptatibus"
      ]
    },
    {
      title: "Developer Plan",
      description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
      price: 49,
      popular: false,
      features: [
        "Quam adipiscing vitae proin",
        "Nec feugiat nisl pretium",
        "Nulla at volutpat diam uteera",
        "Pharetra massa massa ultricies",
        "Massa ultricies mi quis hendrerit",
        "Voluptate id voluptas qui sed aperiam rerum",
        "Iure nihil dolores recusandae odit voluptatibus"
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing section">
      {/* Section Title */}
      <SectionTitle title="Pricing" subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      
      <div className="container">
        <div className="row gy-4">
          {pricingData.map((plan, index) => (
            <div key={index} className="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay={`${(index + 1) * 100}`}>
              <div className={`pricing-item ${plan.popular ? 'featured' : ''} bg-white shadow-md rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105`}>
                {plan.popular && <p className="popular text-center text-yellow-500 font-bold">Popular</p>}
                <h3 className="text-xl font-semibold text-center">{plan.title}</h3>
                <p className="description text-center text-gray-600">{plan.description}</p>
                <h4 className="text-center mt-4">
                  <sup className="text-2xl">$</sup>{plan.price}
                  <span className="text-gray-500"> / month</span>
                </h4>
                <a href="#" className="cta-btn block text-center bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition duration-200">Start a free trial</a>
                <p className="text-center small text-gray-500 mt-2">No credit card required</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i className="bi bi-check text-green-500 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
