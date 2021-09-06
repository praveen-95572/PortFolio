import React from 'react'
import education from  "../assets/img/education.jpg";
import college from "../assets/img/college.jpg";
import {settings,seo,greeting,socialMediaLinks,skills,
  competitiveSites,degrees,certifications,experience,projectsHeader,contactPageData,
} from "./portfolio";

function Education(){
    return (
      <section id="header" className="d-flex align-items-center my-5">
        <div className="container">
          
          <div className="row fadeIn">
            <div className="col-lg-6 order-1 header-img">
              <img src={education} className="upDown"/>
            </div>
            <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main-header ">
                <h1>Education</h1>
                <h3>Basic Qualification and Certifcations</h3>
                <div className="social heartbeat">
                  {competitiveSites.competitiveSites.map(obj => {
                     return <a href={obj.profileLink} target="_blank" rel="noreferrer"><span class="iconify" data-icon={obj.icon} data-width="50"></span></a>;
                  })}
                </div>
            </div>

          </div>
              
          <div class="jumbotron my-5">
                  <h1 class="display-4 slideInDown text-center">Degrees Received</h1>
          </div>

              <div className="row fadeIn">
                
                <div className="col-lg-4 order-1">
                  <div className=" college">
                    <img src={college}/>
                  </div>
                </div>
                <div className="col-md-8 order-2 box1">
                    <div class="card education">
                        <div class="card-header">
                            <p></p>
                            <p>{degrees.degrees[0].title}<span>({degrees.degrees[0].duration})</span></p>
                            <p>{degrees.degrees[0].subtitle}</p>
                        </div>
                        <div class="card-body">
                            <ul type="none">
                                {degrees.degrees[0].descriptions.map(list =>{
                                  return <li>{list}</li>;
                                })}
                            </ul>
                            <a className="btn btn-lg btn-success" href={degrees.degrees[0].website_link} target="_blank" rel="noreferrer">Visit Website</a>
                        </div>
                    </div>
                </div>

              </div>
            </div>

        </section>
    );
};

export default Education;