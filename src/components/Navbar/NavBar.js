import React from "react";
import "./NavBar.css";
import { FiShoppingCart } from "react-icons/fi";
import logo from "./logo-art.png";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav>
			<Link to="/">
				<img src={logo} alt="logo" className="nav-logo" />
			</Link>
			<ul className="nav-btnList">
				<li>
					<Link to="/" className="nav-btn">
						About
					</Link>
				</li>
				<li>
					{/* Linkeo al Home hasta que tenga estos componentes hechos */}
					<Link to="/" className="nav-btn">
						Artists
					</Link>
				</li>
				<li>
					<Link to="/" className="nav-btn">
						Artworks
					</Link>
				</li>
				<FiShoppingCart className="nav-btn" />
			</ul>
		</nav>
	);
}

export default NavBar;
