import campylogo from './CampyLogo/campy.png'
import React, { useState } from "react";

const Nav = () => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
      };

    return (
            <div className="topnav">
            <img src={campylogo} href="/landing" alt="Camp fire logo"></img>
            <div className={isActive ? "change" : "hamburger"} onClick={handleToggle}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            {isActive ? <>
                <a href="/landing">Home</a>
                <a href="/">Make a list</a>
                <a href="/wildfires">Wildfires</a>
                <a href="/about">About</a>
                </> : null
                
            }
        </div>  
    )
}

export default Nav
