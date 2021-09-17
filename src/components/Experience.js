import React from 'react'

const Experience = () => {
    return (
        <div className="experience">
        <div className="d-flex justify-content-center my-5">
            <h1>experience</h1>
        </div>
        <div className="container experience-wrapper">
            <div className="timeline-block timeline-block-right">
                <div className="marker">
                </div>
            <div className="timeline-content">
            <h3>2017-2018</h3>
            <p>Worked as an intern in v4tech computers
               Developed a Application for the medical store,
               For billing and the product storage.
               I have used python and django frame work for building the Application.
            </p>
            </div>
            </div>

            <div className="timeline-block timeline-block-left">
                <div className="marker">
                </div>
            <div className="timeline-content">
            <h3>2018-2019</h3>
            <p>Worked as Full stack developer for Syntbots Project,
               In this project I have used latest RPA technology to create the AI bots and to train the bots i have used
               the microsoft bots.The services and others are written in the python.
               For UI we have used Reactjs and for DB we have used postgre sql.
            </p>
            </div>
            </div>

            <div className="timeline-block timeline-block-right">
                <div className="marker">
                </div>
            <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>Worked as full stack developer for AMEX project,
                In this project we used ansible to write all the automation scripts for the routine task,
                we have used the oracle db for storing the data. for the backend we have used the java 
                for the frontend we have used reactjs. the maitainence of the kafka servers were in the unix platform.
            </p>
            </div>
            </div>

             <div className="timeline-block timeline-block-left">
                <div className="marker">
                </div>
            <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>Working as an UI developer for DAF2.0 project,
               We are creating the end to end software for the DAF,
               We are using angularjs for the front end and for the map we are using here maps,
               for the backend we are using asp.NET, for the notification we are using signalR libraries.
            </p>
            </div>
            </div>

        </div>
        </div>
    )
}

export default Experience
