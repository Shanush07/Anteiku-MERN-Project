import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';
import { assets } from '../../assets/assets'; // Make sure to import icons

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, removeEntirelyFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  
                  {/* Quantity controls */}
                  <div className="cart-quantity-control">
                    <img
                      src={assets.remove_icon_red}
                      alt="minus"
                      className="quantity-icon"
                      onClick={() => removeFromCart(item._id)}
                    />
                    <p>{cartItems[item._id]}</p>
                    <img
                      src={assets.add_icon_green}
                      alt="plus"
                      className="quantity-icon"
                      onClick={() => addToCart(item._id)}
                    />
                  </div>

                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeEntirelyFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
