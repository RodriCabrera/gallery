import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'

function NavBar() {
    return (
        <nav>
            <div className="brand">
              
                ART LATIN AMERICA
            
            </div>
            <div className="nav-btnList">
                <a className="nav-btn" href="#About">About Us</a>
                <a className="nav-btn" href="#artists">Artists</a>
                <a className="nav-btn" href="#artworks">Artworks</a>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar
