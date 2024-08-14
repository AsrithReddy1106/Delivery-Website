import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { useEffect } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {

    const {url,setToken} = useContext(StoreContext)
  const [currState, setCurrentState] = useState("sign up");

  const[data,setData] =useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler=(event)=>{
    const name = event.target.name
    const value = event.target.value
    setData(data =>({...data,[name]:value}))
  }

  const onLogin = async(event) => {
    event.preventDefault()
    let newUrl = url;
    if(currState==="Login"){
        newUrl += "/api/user/login"
    } else {
        newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data);
    if( response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
    } else {
        alert(response.data.message)
    }
  }

//   useEffect(()=>{
//     console.log(data);
//   },[data]
// )

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-input">
          {currState === "Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name" required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your password' required />
        </div>
        <button type='submit'>{currState === "sign up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          {currState === "Login"?<></>:<input type='checkbox' required />}
          {currState === "Login"?<></>:<p>By creating an account, you agree to our <span>Terms & Conditions</span></p>}
        </div>
        {currState === "Login"
          ? <p>Create a new account? <span className='sign-up' onClick={() => setCurrentState("sign up")}>Click here</span></p>
          : <p>Already have an account? <span className='Login' onClick={() => setCurrentState("Login")}>Login Here</span></p>}
      </form>
    </div>
  );
}

export default LoginPopup;
