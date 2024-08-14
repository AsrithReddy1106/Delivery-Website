import React, { useContext } from 'react';
import './cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();

  // Define the delivery fee
  const totalCartAmount = getTotalCartAmount();
  const deliveryFee = totalCartAmount === 0 ? 0 : 2;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p></p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id] * item.price}</p>
                  <p>
                    <button className='remove-button' onClick={() => { removeFromCart(item._id) }}>X</button>
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals:</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Delivery Fee</b>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total:</b>
              <b>${totalCartAmount + deliveryFee}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <p>Have a promo code?</p>
          <div className="cart-promocard-input">
            <input type="text" placeholder="Enter Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;


