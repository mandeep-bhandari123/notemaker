import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'; // make sure this path is correct

export default function Navbar(){
    return(
        <nav className='navbar'>
            <img src={logo} alt="Notemaker Logo" className='navbar-logo' />
            <div className='center-links'>
                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
