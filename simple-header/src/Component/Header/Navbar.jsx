import React from 'react'
import '../Header/Navbar.css'
import logo from '../../assets/red-logo.webp'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="list">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar