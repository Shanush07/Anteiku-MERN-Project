import React from 'react';
import './AwardsSlider.css';
import { assets } from '../../assets/assets';

const InfiniteTestimonials = () => {
  const images = [
    assets.award_1, assets.award_2, assets.award_3, assets.award_4,
    assets.award_5, assets.award_6, assets.award_7, assets.award_8,
  ];

  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">Our Achievements</h2>
      <div className="testimonial-slider-wrapper">
        <div className="testimonial-slider-track">
          {repeatedImages.map((img, idx) => (
            <div className="testimonial-slide" key={idx}>
              <img src={img} alt={`testimonial-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTestimonials;
