import React, { useContext, useEffect, useState } from 'react';
import './FloatingCartButton.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingCartButton = () => {
  const { cartItems } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [hideOnFooter, setHideOnFooter] = useState(false);

  const totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const footerThreshold = 200; // px from bottom
      setHideOnFooter(scrollY >= docHeight - footerThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only show on homepage and if cart has items and not near footer
  if (location.pathname !== '/' || totalItems === 0 || hideOnFooter) return null;

  return (
    <div className="floating-cart-button" onClick={() => navigate('/cart')}>
      <img src={assets.basket_icon} alt="cart" />
      <div className="floating-cart-count">{totalItems}</div>
    </div>
  );
};

export default FloatingCartButton;
