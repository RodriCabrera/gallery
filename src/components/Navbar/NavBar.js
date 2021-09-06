import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'

function NavBar() {
    return (
        <nav>
            <div className="brand">ART LATINOAMERICA</div>
            <div className="btnList">
                <button className="btn">About</button>
                <button className="btn">Artists</button>
                <button className="btn">Shop</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar
