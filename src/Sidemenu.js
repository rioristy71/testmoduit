import React from 'react'
import logo from "./logo.svg";
import logoq1 from "./Q1.svg";
import logoq2 from "./Q2.svg";
import {
    Link
  } from "react-router-dom";

export default function Sidemenu() {
    return (
        <div className="side-menu shadow-lg p-3 mb-5 bg-body rounded">
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="main-menu">
                <ul>
                    <li>
                    <div className="logoq">
                        <img src={logoq1} alt="Q1" />
                      <Link  to="/Question1"><a className="menu-item"> Question 1</a></Link>
                      </div>
                    </li>
                    <li>
                    <div className="logoq">
                        <img src={logoq2} alt="Q2" />
                      <Link to="/Question2"><a className="menu-item"> Question 2</a></Link>
                    </div>
                    </li>    
                </ul>    
            </div> 
        </div>

    )
}
