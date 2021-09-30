import React from "react";
import "./NavBar.css";
import { FiShoppingCart } from "react-icons/fi";
import logo from "./logo-art.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function NavBar() {
	const { cart } = useCartContext();

	const cartIconTotal = () => {
		let total = 0;
		cart.forEach((elem) => (total += elem.quantity));
		return total;
	};
	return (
		<nav>
			<Link to="/">
				<img src={logo} alt="logo" className="nav-logo" />
			</Link>
			<ul className="nav-btnList">
				<li>
					<Link to="/about" className="nav-btn">
						About
					</Link>
				</li>
				<li>
					{/* Linkeo al Home hasta que tenga estos componentes hechos */}
					<Link to="/artists" className="nav-btn">
						Artists
					</Link>
				</li>
				<li>
					<Link to="/artworks" className="nav-btn">
						Artworks
					</Link>
				</li>
				<Link to="/cart" className="nav-btn-cart">
					<FiShoppingCart style={{ margin: "0" }} className="nav-btn" />
					{cart.length > 0 && (
						<p style={{ margin: "0" }}>({cartIconTotal()})</p>
					)}
				</Link>
			</ul>
		</nav>
	);
}

export default NavBar;
