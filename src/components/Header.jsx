import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Recoursive Tutoring</h1>
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/programs">Courses</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;