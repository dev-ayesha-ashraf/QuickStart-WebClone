// src/Carousel.js
import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
const cards = [
  {
    id: 1,
    stars: 5,
    content: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    image: "/testimonials-1.jpg",
    name: "Saul Goodman",
    title: "Ceo & Founder",
  },
  {
    id: 2,
    stars: 5,
    content: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    image: "/testimonials-2.jpg",
    name: "Sara Wilsson",
    title: "Designer",
  },
  {
    id: 3,
    stars: 5,
    content: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    image: "/testimonials-3.jpg",
    name: "Jena Karlis",
    title: "Store Owner",
  },
  {
    id: 4,
    stars: 5,
    content: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    image: "/testimonials-4.jpg",
    name: "Matt Brandon",
    title: "Freelancer",
  },
  {
    id: 5,
    stars: 5,
    content: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    image: "/testimonials-5.jpg",
    name: "John Larson",
    title: "Entrepreneur",
  },
];

const Teatimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for left, -1 for right

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Slide to the left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const displayedCards = [
    cards[(currentIndex - 1 + cards.length) % cards.length],
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
  ];

  return (
    <section>
      <div className="container mx-auto text-center">
        <SectionTitle title="Pricing" subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      </div>
      <div className="relative flex justify-center items-center h-64 overflow-hidden">

        <div
          className={`flex transition-transform duration-1000 ease-in-out`}
          style={{
            transform: `translateX(${direction === 1 ? '-100%' : '100%'})`, // Move left or right based on direction
          }}
        >
          {displayedCards.map((card, index) => (
            <div
              key={card.id}
              className={`mx-2 p-4 border rounded-lg shadow-lg transition-all duration-300 ${index === 1 ? 'scale-110 font-bold' : 'scale-100'
                }`}
              style={{
                transitionDelay: `${(index - 1) * 100}ms`, // Delay for smooth entrance effect
              }}
            >
              <p>
                {card.content}
              </p>
              <p>
                {card.image}
              </p>
              <p>

                {card.name}
              </p>
              <p>
                {card.title}
              </p>
              <p>

                {
                  card.stars
                }
              </p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full bg-gray-400 ${index === currentIndex ? 'bg-blue-500' : ''
                }`}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Teatimonials;

