import React from "react";
import "./NavBar.css";
import { FiShoppingCart } from "react-icons/fi";
import logo from "./logo-art.png";

function NavBar() {
	return (
		<nav>
			<img src={logo} className="nav-logo" alt="logo" />
			<div className="nav-btnList">
				<a className="nav-btn" href="#About">
					About Us
				</a>
				<a className="nav-btn" href="#artists">
					Artists
				</a>
				<a className="nav-btn" href="#artworks">
					Artworks
				</a>
				<button className="nav-btn">
					<FiShoppingCart />
				</button>{" "}
			</div>
		</nav>
	);
}

export default NavBar;
