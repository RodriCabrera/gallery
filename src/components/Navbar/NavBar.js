import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <div className="brand">ART GALLERY</div>
            <div className="btnList">
                <button className="btn">Artists</button>
                <button className="btn">Shop</button>
                <button className="btn">About</button>
            </div>
        </nav>
    )
}

export default NavBar
