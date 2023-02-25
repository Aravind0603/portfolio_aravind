import React from 'react';
import {Link} from "react-scroll";
import "./Topcontent.css";

const Topcontent = () => {
  const newTab=url=>{
    window.open(url)
  }
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>Mr.S.Aravind</h1>
            <p>Aspiring Frontend Developer</p>
            <a href='www.google.com'>
                <button className='topcontent__downloadbtn'  onClick={()=>newTab('https://drive.google.com/file/d/16f3M0kgitLJCQkhd916XhbLNzQasqHtv/view?usp=share_link')} >Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topcontent__workbtn'>My work</button>
            </Link>
        </div>
    </div>
  )
}

export default Topcontent