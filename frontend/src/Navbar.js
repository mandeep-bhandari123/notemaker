import './Navbar.css'
import React from 'react'
export default function navbar(){
    return(
        <nav className='navbar'>
            <div className='logo'>Notemaker</div>
            <ul className='nav-links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
    )
}