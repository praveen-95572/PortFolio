  
import React, { Component } from 'react';
import contact from "../assets/img/contact.jpg";
import blog from "../assets/img/blog.jpg";
import profile from "../assets/img/profile.jpg";
import { contactPageData, greeting, socialMediaLinks } from './portfolio';

class Contact extends Component {
  
  render() {
    return (
      <section id="header" className="d-flex align-items-center my-5">
        <div className="container">

          <div className="row fadeIn">
            <div className="col-lg-6 order-1 header-img">
                    <div className="profile"><img src={profile} alt="profile"/></div>
            </div>
            <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main-header ">
              <h1>{contactPageData.contactSection.title}</h1><p></p>
              <p>{contactPageData.contactSection.description}</p>
              <div className="social heartbeat">
                {socialMediaLinks.map(obj => {
                  return <a href={obj.link} target="_blank" rel="noreferrer"><i className={obj.fontAwesomeIcon} aria-hidden="true"></i></a>;
                })}
              </div>
              <br/><br/><br/><br/>
              <div className="social social1">
                <a  href={greeting.resumeLink} target="_blank" rel="noreferrer" className="btn-get-started">See my Resume</a>
              </div>
            </div>
          </div>

          <div className="row fadeIn"> 
            <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main-header ">
              <h1>{contactPageData.blogSection.title}</h1><p></p>
              <p>{contactPageData.blogSection.subtitle}</p>
              <p></p>
              <div className="social social1">
                <a href={contactPageData.blogSection.link}  className="btn-get-started" target="_blank" rel="noreferrer">Vist my Blogsite</a>
                  </div>
            </div>
            <div className="col-lg-6 order-1 header-img">
                <img src={blog} alt="blog" />
            </div>
          </div>

          <div className="row fadeIn"> 
            <div className="col-lg-6 order-1 header-img">
              <img src={contact} alt="contact" />
            </div>
            <div className="col-md-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column main-header">
              <h1>{contactPageData.addressSection.title}</h1><p></p>
              <p>{contactPageData.addressSection.subtitle}</p>
              <h1>{contactPageData.phoneSection.title}</h1><p></p>
              <p>{contactPageData.phoneSection.subtitle}</p>
            </div>    
          </div>

        </div>
      </section>
    )
  }
}
export default Contact;