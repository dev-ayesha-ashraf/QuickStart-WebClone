import React from 'react';
import SectionTitle from './SectionTitle';

const Pricing = () => {
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
    <section id="pricing" className="pricing section py-16">
   
      <div className="container mx-auto text-center">
        <SectionTitle title="Pricing" subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      </div>

      <div className="container mx-auto min-[800px]:w-[87vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`pricing-item p-6 shadow-lg rounded-lg ${plan.popular ? 'featured' : ''} transition-transform duration-300 hover:scale-105`}
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {plan.popular && <p className="popular flex ml-auto w-[45%] text-white bg-[#388da8] py-[6px] px-[15px] font-bold">Popular</p>}
              <h3 className="text-2xl font-semibold mb-4 font-nunito text-[#3e5055]">{plan.title}</h3>
              <p className="description text-gray-600 mb-4">{plan.description}</p>
              <h4 className=" text-4xl font-bold mb-4">
                <sup className="text-2xl">$</sup>{plan.price}
                <span className="text-gray-500 text-xl"> / month</span>
              </h4>
              <a href="#" className="cta-btn block text-center bg-[#388da8] text-white py-3 rounded hover:bg-blue-600 transition-colors duration-200">Start a free trial</a>
              <p className="text-center text-sm text-gray-500 mt-2">No credit card required</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <i className="bi bi-check text-green-500 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
