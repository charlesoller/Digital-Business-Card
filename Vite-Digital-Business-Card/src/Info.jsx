import React from 'react'
import portrait from "./images/Portrait.jpg"
import mailIcon from "./images/Mail.svg"
import LinkedInIcon from "./images/linkedin.svg"

export default function Info(){
    return(
        <div className="info-component">
            <img src={portrait} alt="A Portrait of Charles" className="info-portrait" />
            <h1 className="info-name">Charles Oller</h1>
            <h3 className="info-role">Web Developer</h3>
            <a href="https://www.charlesoller.com/" target="blank" className="info-website">charlesoller.com</a>
            <div className="info-buttons">
                <a href="mailto:charlesrello@gmail.com" className="btn">
                    <img src={mailIcon} alt="Email Icon"/>
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/charles-oller-111698208/" target="blank" className="btn btn-blue">
                <img src={LinkedInIcon} alt="LinkedIn Icon"/>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}
