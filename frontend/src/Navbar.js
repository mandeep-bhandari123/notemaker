import React from 'react'
import './Navbar.css'
import logo from './logo.png'; // adjust path if needed

export default function Navbar(){
    return(
        <nav className='navbar'>
    <img src={logo} alt="Notemaker Logo" className='navbar-logo' />
    <div className='center-links'>
        <ul className='nav-links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    </div>
</nav>

    )
}