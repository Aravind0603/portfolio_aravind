import React from 'react';
import {Element} from "react-scroll";
import skilling from "../../images/developer-img1.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Skillcontainer.css";

const Skillcontainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
    <div className='skillcontainer__img'>
        <img src={skilling} alt=""/>
    </div>
    <div className='skillcontainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillcontainer__skillset'>
            <h5>React js</h5>
            <div className='skillcontainer__slider skillcontainer__slider1'>
                <LinearProgress variant='determinate' value={60} />
            </div>
        </div>
        <div className='skillcontainer__skillset'>
            <h5>Javascript</h5>
            <div className='skillcontainer__slider skillcontainer__slider2'>
                <LinearProgress variant='determinate' value={50} />
            </div>
        </div>
        <div className='skillcontainer__skillset'>
            <h5>HTML5</h5>
            <div className='skillcontainer__slider skillcontainer__slider3'>
                <LinearProgress variant='determinate' value={80} />
            </div>
        </div>
        <div className='skillcontainer__skillset'>
            <h5>CSS3</h5>
            <div className='skillcontainer__slider skillcontainer__slider4'>
                <LinearProgress variant='determinate' value={80} />
            </div>
        </div>
        <div className='skillcontainer__skillset'>
            <h5>MySQL</h5>
            <div className='skillcontainer__slider skillcontainer__slider5'>
                <LinearProgress variant='determinate' value={50} />
            </div>
        </div>
        <div className='skillcontainer__skillset'>
            <h5>Python</h5>
            <div className='skillcontainer__slider skillcontainer__slider6'>
                <LinearProgress variant='determinate' value={30} />
            </div>
        </div>
    </div>
    </Element>
  )
}

export default Skillcontainer