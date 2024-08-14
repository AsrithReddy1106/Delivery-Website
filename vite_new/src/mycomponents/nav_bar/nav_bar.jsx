import React, { useState, useContext, useRef, useEffect } from 'react';
import './nav_bar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const hideDropdownTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hideDropdownTimeout.current);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideDropdownTimeout.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 100); // 0.1 second delay
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken("");
    navigate("/")
  };

  useEffect(() => {
    return () => clearTimeout(hideDropdownTimeout.current); // Clean up timeout on unmount
  }, []);

  return (
    <div className='nav_bar'>
      <Link to='/'><img onClick={() => setMenu("home")} src={assets.logo} alt="" className='logo' /></Link>
      <ul className='nav_bar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : "inactive"}>home</Link>
        <a href='#exploremenu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
      </ul>
      <div className='nav_bar-right'>
        <div className='nav_bar-search'>
          <img src={assets.search_icon} alt="" />
        </div>
        <div className='nav_bar-search-icon'>
          <Link to='/cart'><img onClick={() => setMenu("none")} src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div
            className="nav-profile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={assets.profile_icon} alt="" />
            <ul className={`nav-profile-dropdown ${dropdownVisible ? 'visible' : 'hidden'}`}>
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={handleLogout}><img src={assets.logout_icon} alt="" /><p>Log out</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
