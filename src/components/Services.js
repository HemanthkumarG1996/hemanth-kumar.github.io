import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
         <h1 className= "py-5">my services</h1>
         <div className="container">
         <div className="row">
         <div className="col-md-3 col-sm-6">
         <div className="box">
         <div className="circle">
         <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
         </div>
         <h3> Web Design</h3>
         <p>I approach each project individually and always focus on the result.</p>
         </div>
         </div>
         <div className="col-md-3 col-sm-6">
         <div className="box">
         <div className="circle">
         <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
         </div>
         <h3> Web Developement</h3>
         <p>Your Websites will be built with an new proven technologies.</p>
         </div>
         </div>
         <div className="col-md-3 col-sm-6">
         <div className="box">
         <div className="circle">
         <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
         </div>
         <h3> Social Media Marketing</h3>
         <p>Your potential clients will see your services and products on the social media.</p>
         </div>
         </div>
         <div className="col-md-3 col-sm-6">
         <div className="box">
         <div className="circle">
         <FontAwesomeIcon className="icon" icon={faProjectDiagram} size="2x" />
         </div>
         <h3> Project Design</h3>
         <p>The projects will be built with high dedication and with latest technologies. </p>
         </div>
         </div>
         </div>
         </div>
         </div>
    )
}

export default Services
