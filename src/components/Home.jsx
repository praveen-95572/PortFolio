import React, { Component } from 'react';
import home_img from "../assets/img/home.png";
import {greeting,socialMediaLinks,skills} from "./portfolio";

class Home extends Component {
  render() {
    return (
      <section id="header" className="d-flex align-items-center my-5">
        <div className="container"> 

              <div className="row">
                  <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main-header slideInLeft">
                    <h1>{greeting.title}</h1>
                    <p>{greeting.nickname}</p>
                    <p>{greeting.subTitle1}<b>{greeting.course}</b>{greeting.subTitle2}</p>
                    <div className="social heartbeat">
                      {socialMediaLinks.map(obj => {
                        return <a href={obj.link} target="_blank" rel="noreferrer"><i className={obj.fontAwesomeIcon} aria-hidden="true"></i></a>;
                      })}
                    </div>
                    
                    <div className="social">
                      <a href="https://github.com/praveen-95572" className="btn-get-started">Github</a>
                      <a href={greeting.resumeLink} target="_blank" rel="noreferrer" className="btn-get-started">Resume</a>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 order-1 order-lg-2 header-img slideInRight">
                    <img src={home_img} alt="Home_img" className=" upDown"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="#Programmer"/>
                  </div>
                </div>

              
                <div class="jumbotron my-5">
                  <h1 class="display-4 slideInDown text-center">WHAT I DO ?</h1>
                  </div>

              {skills.data.map( obj => {
                return(
                  
                <div className=" skills row my-5">
                  <div className="col-lg-6 order-2 header-img slideInLeft">
                    <img src={obj.imgsrc} alt={obj.title}/>
                  </div>
                  <div className="col-md-6 pt-2 pt-lg-0 order-2 d-flex justify-content-center flex-column slideInRight">
                  <h1>{obj.title}</h1>
                  <ul type="none" class="skill-img">
                  {obj.softwareSkills.map(list => {
                    return(<li><button disabled data-bs-toggle="tooltip" data-bs-placement="bottom" title={list.skillName}><img src={list.fontAwesomeClassname} alt="tools" width="50"/></button><i className={list.fontAwesomeclassname} /></li>);
                  })}</ul>
                  <ul type="none">
                    {obj.skills.map( list => {
                      return(<li>{list}</li>);
                    })}
                  </ul>
                </div>
              </div>
                );
              })}

          
        
        
         
        </div>
      </section>
      
    );
  };
};

export default Home;