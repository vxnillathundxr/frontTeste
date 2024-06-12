import React, { useState } from 'react';
import dirIcon from '../assets/direitaIcon.svg'
import esqIcon from '../assets/esquerdaIcon.svg'

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} 
        className="w-screen transition-transform duration-1000 ease-in-out w-full h-96 object-cover"
        style={{ transform: `translateX(-${currentIndex * 5}%)`}}
        />
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform "
       
      >
        <img className="md:size-12 size-8" src={esqIcon} alt="direita" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform"

      >
        <img className="md:size-12 size-8" src={dirIcon} alt="esquerda" />
      </button>
    </div>
  );
};

export default Carousel;

