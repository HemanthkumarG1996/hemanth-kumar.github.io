import React from 'react'
import author from '../me.jpg'

const AboutMe = () => {
    return (
        <div className="container py-5">
           <div className="row">
            <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
            <img className="profile-img" src = {author} alt="author..."/>
            </div>
            </div>
            <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me</h1>
            <p>
            Hi, I’m Hemanth Kumar  living in Banglore, a Designer and Front-End Developer specializing in Web Design and Digital Media. I'm extremely dynamic via web-based networking media, and attempt to persuade more individuals to join the tech world by indicating what my life resembles in this community.

I begun coding when I was 16 years old. I continue enhancing my abilities, increased more information, and my enthusiasm for creating develop.

The work I give is of most astounding quality, completely responsive, and tried in a wide scope of gadgets. I take incredible consideration to guarantee each extend is well-recorded and effectively viable so you can improve a site as your organization develops.
            </p>
            </div>
           </div> 
        </div>
    )
}

export default AboutMe
