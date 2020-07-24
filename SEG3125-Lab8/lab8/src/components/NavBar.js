import React from "react";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav  className="nav-wrapper blue">
            <div style={{flexDirection:"row"}} className="container ">
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/bookonline">Book Online</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar