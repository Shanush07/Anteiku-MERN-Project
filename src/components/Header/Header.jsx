import React, { useEffect, useState } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  const images = [assets.header_img, assets.header_img2, assets.header_img3, assets.header_img4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='header-slider'>
      <div
        className='slider-track'
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className='slide' style={{ backgroundImage: `url(${img})` }} />
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
