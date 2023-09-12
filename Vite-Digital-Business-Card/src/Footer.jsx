import React from 'react'

import GitHubIcon from "./images/GitHubIcon.svg"
import InstagramIcon from "./images/InstagramIcon.png"


export default function Footer(){
    return(
        <div className="footer-component">
            <a href="https://www.instagram.com/charlesoller/" target="blank" className="footer-icon">
                <img src={InstagramIcon} />
            </a>
            <a href="https://github.com/charlesoller" target="blank" className="footer-icon">
                <img src={GitHubIcon} />
            </a>
        </div>
    )
}
