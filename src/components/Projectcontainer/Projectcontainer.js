import React from 'react';
import Project from '../Project/Project';
import {Element} from "react-scroll";
import "./Projectcontainer.css";


const Projectcontainer = () => {
    
    const projects =[
        {
            img: 
                "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png",
            title: "Wikipedia search application",
            desc: "Fetched search results from server asynchronously using fetch GET HTTP API call. When a user clicks on a particular result, opens the website in a new tab by using the target attribute of the anchor tag in HTML",
            link: "https://aravinds.ccbp.tech/",
        },
        {
            img: 
                "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-banner-bg.png",
            title: "VR Products store(VR Website)",
            desc: "Developed a responsive website for VR products where user can see list of products, detailed information about a product and trending blogs, contact us info",
            link:"https://aravindvrapp.ccbp.tech/",
        },
        {
            img:
                "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/book-apj-img.png",
            title: "My Library ( Books Page)",
            desc: "Designed a static website where users can find out about my recommendations of books and info about popular books.",
            link:"https://aravindsbooks.ccbp.tech/",
        },
        
    ]
  
    return (
        <Element className='projectcontainer' id="projects">
            <h1>Projects</h1>
            <p>Here are some projects which i did.</p>
            <div className='projectcontainer__projects'>
                {projects.map((project,index)=>{
                    return(
                        <Project key={index} 
                                img={project.img} 
                                title={project.title} 
                                desc={project.desc} 
                                link={project.link}
                                />
                    );
                })
            }
        </div>
    </Element>
  );
};

export default Projectcontainer;