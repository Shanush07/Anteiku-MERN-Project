import React, { useContext } from 'react';
import './FloatingCartButton.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingCartButton = () => {
  const { cartItems } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  // Don't show if on Cart page or if cart is empty
  if (location.pathname === '/cart' || totalItems === 0) return null;

  return (
    <div className="floating-cart-button" onClick={() => navigate('/cart')}>
      <img src={assets.basket_icon} alt="cart" />
      <div className="floating-cart-count">{totalItems}</div>
    </div>
  );
};

export default FloatingCartButton;
