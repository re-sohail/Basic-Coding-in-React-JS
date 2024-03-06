import React from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import cart from '../../assets/img/cart.png'

function Header() {
  return (
    <div className='nav'>
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="list">
            <ul>
                <li>Bestseller</li>
                <li>Living</li>
                <li>Bedroom</li>
                <li>Dinning</li>
                <li>Office</li>
            </ul>
        </div>
        <div className="icon">
            <img src={search} />
            <img src={cart} />
        </div>
    </div>
  )
}

export default Header