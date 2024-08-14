// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footercontent-left">
//           <img src={assets.logo} alt=""/>
//           <p>njdcx csdjbj dscbjds dcsbj</p>
//           <div className="footer-social-icons">
//             <img src={assets.facebook_icon} alt="" />
//             <img src={assets.twitter_icon} alt="" />
//             <img src={assets.linkedin_icon} alt="" />
//           </div>
//         </div>
//         <div className="footercontent-center">
//              <h2>Company</h2>
//              <ul>
//               <li>Home</li>
//               <li>About Us</li>
//               <li>Delivery</li>
//               <li>Priacy Policy</li>
//              </ul>
//         </div>
//         <div className="footercontent-right">
//           <h2>Get In Touch</h2>
//           <ul>
//             <li>+1-321-253-2504</li>
//             <li>info@njdcx.com</li>

//           </ul>

//         </div>
//       </div>
//       <hr/>
//       <p className="footer-copyright">
//         Copyright 2024 tomatao.com -ALL RIGHTS RESERVED.
//       </p>
        
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footercontent-left">
          <img src={assets.logo} alt="Company Logo"/>
          <p>njdcx csdjbj dscbjds dcsbj</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footercontent-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footercontent-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+1-321-253-2504</li>
            <li>info@njdcx.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 tomatao.com - ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}

export default Footer;
