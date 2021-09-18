import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

const Contacts = () => {
    const[successMessage,setSuccessMessage]= useState("");
    const {register,handleSubmit,errors}=useForm();

    const serviceID ="service_4rtlfvd";
    const templateID ="template_ID";
    const userID = "user_xyWuBWJOFALlxXfMug6NK";

    const onSubmit =(data,r)=>{
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err=> console.error(`Something went Wrong ${err}`));
      };
    return (
        <div className="contacts">
        <div className="text-center">
           <h1>Contact me</h1>
           <p>Please fill out the form and describe your reason for contact, i will contact you as soon as possible.</p> 
        </div>
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
        <div className="col-md-6 col-xs-12">
        <input className="form-control" type="text" placeholder="Name" name="name" 
        />
        <div className="line"></div>
        <input className="form-control" placeholder="Phone Number " name="phone" />
        <div className="line"></div>
        <input className="form-control" type="email" placeholder="Email" name="email" />
        <div className="line"></div>
        <input className="form-control" type="text" placeholder="Subject" name="subject" />
        <div className="line"></div>
        </div>
        <div className="col-md-6 col-xs-12">
        <textarea className="form-control" type="text" placeholder="Description" name="description" ></textarea>
        <div className="line"></div>
        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
        </div>
        </div>
        </form>
        </div>
        </div>
    )
}

export default Contacts
