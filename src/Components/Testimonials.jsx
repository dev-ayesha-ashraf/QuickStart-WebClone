import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from './SectionTitle';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay } from 'swiper/modules';
const slides = [
  {
    id: 1,
    title: 'Sara Wilson',
    image: '/testimonials-1.jpg',
    description: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    rating: 4.5,
    profession: 'Freelancer',
  },
  {
    id: 2,
    title: 'Jena Karlis',
    image: '/testimonials-2.jpg',

    description: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    rating: 5,
    profession: 'Enterpreneur',
  },
  {
    id: 3,
    title: 'Matt Brandon',
    image: '/testimonials-3.jpg',

    description: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    rating: 4,
    profession: 'Designer',
  },
  {
    id: 4,
    title: 'John Larson',
    image: '/testimonials-4.jpg',

    description: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    rating: 4.8,
    profession: 'Developer',
  },
  {
    id: 5,
    title: 'Soul Goodman',
    image: '/testimonials-5.jpg',

    description: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    rating: 3.5,
    profession: 'Manager',
  },

];

export default function Testimonials() {

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else if (halfStar && i === filledStars) {
        stars.push(<span key={i} className="text-yellow-500">☆</span>);
      } else {
        stars.push(<span key={i} className="text-gray-400">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className='mx-auto min-[800px]:w-[87vw]'>
      <div className="container mx-auto">
        <SectionTitle
          title="Testimonials"
          description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
      </div>
      <Swiper
        slidesPerView={1} 
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="testimonials-item bg-white shadow-md rounded-lg p-4">
              <div className="flex items-center justify-center mb-[15px]">
                <div className="flex items-center">
                  {renderStars(slide.rating)}
                </div>
              </div>
              <p className="text-gray-900 text-base mt-2 italic text-center mb-[15px]">{slide.description}</p>

              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-4">{slide.title}</h3>
              <p className='profession'>

                {slide.profession}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 z-10" />
    </div>
  );
}
