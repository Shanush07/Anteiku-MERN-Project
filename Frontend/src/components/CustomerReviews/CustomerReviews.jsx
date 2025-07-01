import React from 'react';
import './CustomerReviews.css';
import { assets } from '../../assets/assets';

const reviews = [
  {
    name: "Aarav Mehta",
    photo: assets.user_1,
    review: "Absolutely loved the food and ambiance! Service was top-notch. Will definitely come again.",
  },
  {
    name: "Priya Sharma",
    photo: assets.user_2,
    review: "The flavors were so authentic and the staff were really warm and friendly. Highly recommended!",
  },
  {
    name: "Rohan Verma",
    photo: assets.user_3,
    review: "Great value for money and the desserts were divine. One of the best dining experiences I’ve had.",
  },
  {
    name: "Neha Kapoor",
    photo: assets.user_4,
    review: "The Salad was mouthwatering and service was super fast. 5 stars all the way!",
  },
  {
    name: "Ishaan Joshi",
    photo: assets.user_5,
    review: "Perfect place for a family dinner. Cozy atmosphere and delicious food.",
  },
  {
    name: "Ananya Kurosawa",
    photo: assets.user_6,
    review: "Beautiful presentation and even better flavors. Felt like a gourmet experience!",
  },
  {
    name: "Karan Uchiha",
    photo: assets.user_7,
    review: "Food that hits your soul. Every bite felt powerful, like a flavor genjutsu!",
  },
  {
    name: "Simran Stark",
    photo: assets.user_8,
    review: "Winter may be coming, but this place warmed my heart with its food!",
  },
  {
    name: "Dev Aryaman",
    photo: assets.user_9,
    review: "Tasted like home but elevated with elegance. The paneer was insanely good!",
  },
  {
    name: "Aisha Hoshigaki",
    photo: assets.user_10,
    review: "Fish curry was legendary! As a seafood fan, I’m impressed by the quality.",
  },
  {
    name: "Kabir Kenobi",
    photo: assets.user_11,
    review: "This is the way to dine! The service staff were Jedi-level attentive.",
  },
  {
    name: "Tanya Abarai",
    photo: assets.user_12,
    review: "Loved the tangy twist in the chaats. Spices were just right. Would come back weekly!",
  },
  {
    name: "Reyansh Nakamura",
    photo: assets.user_13,
    review: "Perfectly balanced menu. Loved the fusion options and mocktails!",
  },
  {
    name: "Meera Elric",
    photo: assets.user_14,
    review: "Tasted like alchemy in every bite. They’ve mastered the art of flavor fusion.",
  },
  {
    name: "Arjun Takashi",
    photo: assets.user_15,
    review: "I came for the biryani, stayed for the hospitality. Absolutely unforgettable.",
  },
  {
    name: "Sneha Skywalker",
    photo: assets.user_16,
    review: "A force to be reckoned with when it comes to flavor and finesse!",
  },
  {
    name: "Ritika Kamado",
    photo: assets.user_17,
    review: "Each dish was like a flame dance — vibrant, hot, and full of flavor!",
  },
  {
    name: "Yuvraj Saotome",
    photo: assets.user_18,
    review: "They’ve truly unlocked a new level of dining experience. Love every bit!",
  },
  {
    name: "Pooja Romanoff",
    photo: assets.user_19,
    review: "Sleek interiors, stealthy fast service, and killer dishes. Total Black Widow vibes!",
  },
  {
    name: "Rajita Ayanami",
    photo: assets.user_20,
    review: "The sushi was ethereal and the vibes were serene. Highly spiritual meal!",
  },
];


const CustomerReviews = () => {

  const repeated = [...reviews, ...reviews];

  return (
    <div className="reviews-section">
      <h2 className="reviews-heading">What Our Customers Say</h2>
      <div className="reviews-slider-wrapper">
        <div className="reviews-slider-track">
          {repeated.map((item, index) => (
            <div className="review-card" key={index}>
              <p className="review-text">“{item.review}”</p>
              <div className="review-profile">
                <img src={item.photo} alt={item.name} />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
