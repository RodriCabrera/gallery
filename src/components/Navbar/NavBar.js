import React, { useState } from "react";
import "./NavBar.css";
import { FiShoppingCart } from "react-icons/fi";
import logo from "./logo-art.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import {
	IconLogo,
	IconLogoMobile,
	Menu,
	MenuItem,
	MenuItemLink,
	NavbarContainer,
	NavbarWrapper,
} from "./NavBar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
	const { cart } = useCartContext();
	const [click, setClick] = useState(false);

	const changeClick = () => {
		setClick(!click);
	};
	const cartIconTotal = () => {
		let total = 0;
		cart.forEach((elem) => (total += elem.quantity));
		return total;
	};
	return (
		<NavbarContainer>
			<NavbarWrapper>
				<Link to="/">
					<img src={logo} alt="logo" className="nav-logo" />
				</Link>

				<IconLogoMobile onClick={() => changeClick()}>
					{click ? <FaTimes /> : <FaBars />}
				</IconLogoMobile>

				<Menu click={click}>
					<MenuItem to="/artworks" onClick={() => changeClick()}>
						<MenuItemLink to="/artworks">ARTWORKS</MenuItemLink>
					</MenuItem>
					<MenuItem to="/artists" onClick={() => changeClick()}>
						<MenuItemLink to="/artists">ARTISTS</MenuItemLink>
					</MenuItem>
					<MenuItem to="/about" onClick={() => changeClick()}>
						<MenuItemLink>ABOUT US</MenuItemLink>
					</MenuItem>
					<MenuItem to="/cart" onClick={() => changeClick()}>
						<Link to="/cart" className="nav-btn-cart">
							<FiShoppingCart style={{ margin: "0" }} className="nav-btn" />
							{cart.length > 0 && (
								<p style={{ margin: "0" }}>({cartIconTotal()})</p>
							)}
						</Link>
					</MenuItem>
				</Menu>
			</NavbarWrapper>
		</NavbarContainer>
	);
}

export default NavBar;
