import React from 'react'
import {Element} from "react-scroll";
import {IconButton} from "@material-ui/core";
import {Email,LinkedIn,Call} from "@material-ui/icons"
import "./Contact.css";

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>aravindhari.sm@gmail.com</span>
            </p>
            <p>
                LinkedIn : <span>https://www.linkedin.com/in/aravinds0603</span>
            </p>
            <p>
                Mobile : <span>9751336760</span>
            </p>
            <div className='contact__icons'>
            <a href= "aravindhari.sm@gmail.com" target="_blank" rel='noopener noreferrer'>   
                <IconButton>
                    <Email/>
                </IconButton>
            </a>     
            <a href= "https://www.linkedin.com/in/aravinds0603" target="_blank" rel='noopener noreferrer'>   
                <IconButton>
                    <LinkedIn/>
                </IconButton>
            </a>   
            <a href='google.com'>   
                <IconButton>
                    <Call/>
                </IconButton>
            </a>   
            </div>
        </div>
    </Element>
  )
}

export default Contact