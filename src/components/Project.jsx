import React from 'react'
import project from "../assets/img/project.jpg";
import { projectsHeader , projects } from './portfolio';

function Project(){
    return (
      <section id="header" className="d-flex align-items-center my-5">
        <div className="container">

          <div className="row fadeIn mb-5">
            <div className="col-lg-6 order-1 header-img">
              <img src={project} alt="project" className="upDown"/>
            </div>
            <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main-header ">
                    <h1>{projectsHeader.title}</h1>
                    <p></p>
                    <p>{projectsHeader.description} </p>
            </div>
          </div>

          <div className="row fadeIn">
            {
              projects.data.map( obj => {
                  return(
                    <div className="col-sm-12 col-lg-4 col-md-4 my-5">
                        <div className="card proj-card">
                          <a href={obj.link} target="_blank" rel="noreferrer">
                            <div className="card-body">
                              <h5>{obj.title}</h5>
                              <p>{obj.description}</p>
                              <p>Created on : {obj.date}</p>
                              <ul type="none">{obj.tools.map(x => {
                                return(
                                  <li>
                                    <button disabled data-bs-toggle="tooltip" data-bs-placement="bottom" title={x.toolName}><img src={x.fontAwesomeClassname} alt="loading" width="32"/></button>
                                  </li>
                                )
                              })}</ul>
                            </div>
                          </a>
                        </div>
                      
                    </div>          
                    
                  );

              })
            }
            
          </div>
        </div>
      </section>
    );
};


export default Project;