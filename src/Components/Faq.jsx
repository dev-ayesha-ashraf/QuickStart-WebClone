import React, { useState } from 'react';
import SectionTitle from './SectionTitle'; // Adjust the import based on your folder structure

const FAQSection = () => {
  // JSON data for FAQs
  const faqData = [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
      active: true,
    },
    {
      question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
      answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
      active: false,
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.",
      active: false,
    },
    {
      question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
      active: false,
    },
    {
      question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
      answer: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
      active: false,
    },
    {
      question: "Perspiciatis quod quo quos nulla quo illum ullam?",
      answer: "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.",
      active: false,
    },
  ];

  // State to manage active FAQ
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle FAQ toggle
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section py-10 bg-gray-50">
      {/* Section Title */}
      <SectionTitle title="Frequently Asked Questions"/>
      <div className="container mx-auto">
        <div className="mx-auto min-[800px]:w-[70vw]">
          <div className="faq-container space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item border border-gray-200 rounded-lg p-4 transition duration-300 ease-in-out`}
              >
                <h3
                  className={`text-md font-nunito font-semibold cursor-pointer flex justify-between transition-colors duration-300
                    ${activeIndex === index ? 'text-[#388da8]' : 'text-[#3e5055]'} hover:text-[#388da8]`}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                  <i
                    className={`faq-toggle bi bi-chevron-right ${activeIndex === index ? 'rotate-90' : ''}`}
                  ></i>
                </h3>
                <div className={`faq-content pt-[10px] ${activeIndex === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-900">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

