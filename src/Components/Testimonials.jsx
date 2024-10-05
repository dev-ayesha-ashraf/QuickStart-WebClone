// src/Carousel.js
import React, { useState, useEffect } from 'react';

const cards = [
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
  { id: 4, content: 'Card 4' },
  { id: 5, content: 'Card 5' },
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
            className={`mx-2 p-4 border rounded-lg shadow-lg transition-all duration-300 ${
              index === 1 ? 'scale-110 font-bold' : 'scale-100'
            }`}
            style={{
              transitionDelay: `${(index - 1) * 100}ms`, // Delay for smooth entrance effect
            }}
          >
            {card.content}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full bg-gray-400 ${
              index === currentIndex ? 'bg-blue-500' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Teatimonials;

