import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar(){
    const brand="< Praveen Bisht />"
    return(
        
        <div className="container-fluid nav_bg slideInDown">
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/">{brand}</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active"   to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact  activeClassName="menu_active" className="nav-link"  to="/education">Education</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact  activeClassName="menu_active" className="nav-link"  to="/experience">Experience</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact  activeClassName="menu_active" className="nav-link"  to="/projects">Projects</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact  activeClassName="menu_active" className="nav-link"  to="/contact">Contact Me</NavLink>
                            </li>
                            <li class="nav-item">
                                <a href="https://praveen-95572.github.io/Blog/" target="_blank" rel="noreferrer"  activeClassName="menu_active" className="nav-link">My Blog</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;