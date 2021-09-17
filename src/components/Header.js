import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div  className="header-wrapper">
          <div className="main-info">
           <h1>Web developement and websites promotions</h1>   
           <Typed
           className="typed-text"
           strings={["Web Design","Web Developement","Facebook ads","google ads"]}
           typeSpeed={40}
           backSpeed={60}
           loop
           />
           <a href='#' className="btn-main-offer">contact me</a>
        </div>  
        </div>
    )
}

export default Header