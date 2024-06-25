import React, { useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
  images: string[];
}
// наиль!!!!!! намик блядота пейсяр ебаная хуила 
//наиль учти это
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
        <div className="inner">
            
      </div>
      <div className="carousel__slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel__slide" key={index} style={{ backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
      
      <button className="carousel__button carousel__button--prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="carousel__button carousel__button--next" onClick={handleNextClick}>
        &#10095;
      </button>
      <div className="carousel__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
