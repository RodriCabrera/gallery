import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <nav>
            <div className="brand">ART GALLERY</div>
            <div className="btnList">
                <button className="btn">About</button>
                <button className="btn">Artists</button>
                <button className="btn">Shop</button>
                <CartWidget className="btn"/>
            </div>
        </nav>
    )
}

export default NavBar
