import React from "react";
import { Link } from 'react-router-dom';
import './header.css'

const Header = () =>{
    return(
        <header className="header">
            <div className="logo-container">
                <img src="/logo.png" alt="HappyMail Logo" className="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/features'>Features</Link></li>
                    <li><Link to='/login'>Log in</Link></li>
                    <li><Link to='/signup'>Sign up</Link></li>
                </ul>
            </nav>

        </header>

    );
};
export default Header;