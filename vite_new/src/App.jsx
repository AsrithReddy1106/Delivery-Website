import { useState } from 'react';
import './App.css';
import Navbar  from './mycomponents/nav_bar/nav_bar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import Footer from './mycomponents/Footer/Footer';
import LoginPopup from './mycomponents/LoginPopup/LoginPopup';
import PlaceOrder from './pages/placeorder/PlaceOrder'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/cart' element = {<Cart/>}/>
        <Route path ='/order' element = {<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
