import React, { useState } from 'react';
import Typed from 'react-typed';
import { Document, Page } from 'react-pdf';
import Hemanth from '../../src/Hemanth.pdf';


const Header = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    
    return (
        <div id="home" className="header-wrapper">
          <div className="main-info">
           <h1>Web developement and websites promotions</h1>   
           <Typed
           className="typed-text"
           strings={["Web Design","Web Developement","Social Media Marketing","Project Design"]}
           typeSpeed={40}
           backSpeed={60}
           loop
           />
           <a href='C:\Users\A736876\project\hemanth-kumar.github.io\src\Hemanth.pdf'  className="btn-main-offer" download="Hemanth">Download CV</a>
        </div>  
        </div>
    )
}

export default Header
