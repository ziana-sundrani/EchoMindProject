import React, {useState} from 'react'
import './Navbar.css';
import {useLocation} from "react-router-dom";
import logo from "../../Images/logo.jpg";

const Navbar = () => {
    const location = useLocation();
    return (
        <div className={"navbar"}>
        <div className={"logoContainer"}>
            <img src={logo} alt="EchoMind Logo" className="logo" />
            <h2 className = {"brandName"}>EchoMind</h2>
        </div>
        <div className={"pagesContainer"}>
            <ul className={"pages"}>
                <li className={location.pathname === "/" ? "active": ""}>
                    <a href={"/"}>Journal</a>
                </li>
                <li className= {location.pathname === "/mhresources" ? "active": ""}>
                    <a href={"/mhresources"}>Mental Health Resources</a>
                </li>
            </ul>
        </div>

    </div>
    )
};

export default Navbar;