import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  const images = [assets.header_img, assets.header_img2, assets.header_img3, assets.header_img4, assets.header_img5];
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef(null);
  const lastMoveTimeRef = useRef(Date.now());

  // Auto-slide
  useEffect(() => {
    startSlider();
    return stopSlider;
  }, []);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopSlider = () => clearInterval(intervalRef.current);

  // Hover logic
  const handleMouseEnter = () => {
    setHovered(true);
    stopSlider();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    startSlider();
  };

  // Detect direction based on position
  const handleMouseMove = (e) => {
    const sliderWidth = e.currentTarget.offsetWidth;
    const mouseX = e.clientX - e.currentTarget.getBoundingClientRect().left;

    const now = Date.now();
    if (now - lastMoveTimeRef.current < 800) return; // throttle to 800ms
    lastMoveTimeRef.current = now;

    if (mouseX < sliderWidth / 2) {
      // go left
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    } else {
      // go right
      setIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div
      className="header-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${hovered && i === index ? 'hover-direction' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our mission is to
          satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
