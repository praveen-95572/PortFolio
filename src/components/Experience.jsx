import React from 'react'
import experienceImg from "../assets/img/experience.jpg";
import {experience } from "./portfolio";

function Experience(){
    return (
    <section id="header" className="d-flex align-items-center my-5">
        <div className="container">
          
            <div className="row fadeIn">
                <div className="col-lg-6 order-1 header-img">
                    <img src={experienceImg} alt="experience" className="upDown"/>
                </div>
                <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main-header ">
                        <h1>{experience.title}</h1>
                        <h3>{experience.subtitle}</h3><p></p>
                        <p>{experience.description}  </p>
                </div>
            </div>

            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Work
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <p>Qualify in 1st round (template creation) <strong>Hicoder</strong>  web developer hackathon organized by
                        dare2compete.com</p>
                        <strong>Hold a 2nd position in<code><a href="https://codingclub.tech/" target="_blank" rel="noreferrer"> coding club competiton</a> </code>held in our campus. </strong>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Internship
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        
                    </div>
                    </div>
                </div>
                
            </div>
            
        </div>        
    </section>
        
    );
};

export default Experience;