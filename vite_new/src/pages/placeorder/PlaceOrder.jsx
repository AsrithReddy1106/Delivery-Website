import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const PlaceOrder = () => {
  const { getTotalCartAmount, token, url, food_list, cartItems } = useContext(StoreContext);

  // Define the delivery fee
  const totalCartAmount = getTotalCartAmount();
  const deliveryFee = totalCartAmount === 0 ? 0 : 2;


  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value })
  }

  // useEffect(() => {
  //   console.log('cartItems:', cartItems);
  // }, [cartItems]);

    const placeOrder = async(event) =>{
      event.preventDefault();
      let orderItems=[]
      food_list.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo=item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+deliveryFee
      }
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      if (response.data.success) {
        alert('Order placed successfully!');
      } else {
        alert('Failed to place order: ' + response.data.message);
      }


    }
    // useEffect (()=>{

    //   console.log(data)
    // },[data])
    return (
      <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-fields">
            <input name="firstname" onChange={onChangeHandler} value={data.firstname} type='text' placeholder='First name' />
            <input name="lastname" onChange={onChangeHandler} value={data.lastname} type='text' placeholder='Last name' />
          </div>
          <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
          <input name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
          <div className="multi-fields">
            <input name="city" onChange={onChangeHandler} value={data.city} type='text' placeholder='City' />
            <input name="state" onChange={onChangeHandler} value={data.state} type='text' placeholder='State' />
          </div>
          <div className="multi-fields">
            <input name="zipcode" onChange={onChangeHandler} value={data.zipcode} type='text' placeholder='Zip Code' />
            <input name="country" onChange={onChangeHandler} value={data.country} type='text' placeholder='Country' />
          </div>
          <input name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone number' />
        </div>
        <div className="place-order-right">
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
            <button type='submit' >Proceed To Payment</button>
          </div>
        </div>
      </form>
    );
  }

  export default PlaceOrder;
