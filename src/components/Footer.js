import React from 'react';
import {EmailShareButton,EmailIcon,FacebookShareButton,FacebookIcon,LinkedinShareButton,LinkedinIcon,WhatsappShareButton,WhatsappIcon} from 'react-share';
import { faAddressBook, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
        <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="d-flex">
        <FontAwesomeIcon className="icon" icon={faAddressBook} size="1.8px" />&nbsp;
        <p>City Banglore Main st #1112</p>
        </div>
        <div className="d-flex">
        <FontAwesomeIcon className="icon" icon={faPhone} size="1.8px" />&nbsp;
        <a href="8073354310">+(91)8073354310</a>
        </div>
        <div className="d-flex">
        <FontAwesomeIcon className="icon" icon={faMailBulk} size="1.8px" />&nbsp;
        <p>hemanth140896@gmail.com</p>
        </div>
        </div>
        <div className="col-lg-3 col-md-2 col-sm-6">
        <div className="row">
        <div className="col">
        <a className="footer-nav">Home</a>
        <br/>
        <a className="footer-nav">About me</a>
        <br/>
        <a className="footer-nav">Services</a>
        <br/>
        </div>
        <div className="col">
        <a className="footer-nav">Experience</a>
        <br/>
        <a className="footer-nav">Education</a>
        <br />
        <a className="footer-nav">Contacts</a>
        <br/>
        </div>
        </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
        <div className="d-flex justify-content-center">
        <FacebookShareButton 
        url={"https://www.instagram.com/_h_e_m_i_h_e_m_s_/"}
        quote={"UI Developer"}
        hashtag="#JavaScript"
        >
            <FacebookIcon className="mx-3" size={36}/>
        </FacebookShareButton>
        <EmailShareButton 
        url={"https://www.instagram.com/_h_e_m_i_h_e_m_s_/"}
        quote={"UI Developer"}
        hashtag="#JavaScript"
        >
            <EmailIcon className="mx-3" size={36}/>
        </EmailShareButton>
        <LinkedinShareButton 
        url={"https://www.instagram.com/_h_e_m_i_h_e_m_s_/"}
        quote={"UI Developer"}
        hashtag="#JavaScript"
        >
            <LinkedinIcon className="mx-3" size={36}/>
        </LinkedinShareButton>
        <WhatsappShareButton 
        url={"https://www.instagram.com/_h_e_m_i_h_e_m_s_/"}
        quote={"UI Developer"}
        hashtag="#JavaScript"
        >
            <WhatsappIcon className="mx-3" size={36}/>
        </WhatsappShareButton>
        </div>
        <p className="pt-3 text-center">
        Copyright&copy;
        {new Date().getFullYear()}&nbsp;Banglore | All Rights Reserved
        </p>
        </div>
        </div>
        </div>   
        </div>
    )
}

export default Footer
