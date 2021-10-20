import React, { useState } from "react";
import "./NavBar.css";
import logo from "./logo-art.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import {
	CartIcon,
	IconLogo,
	IconLogoMobile,
	Menu,
	MenuItem,
	MenuItemLink,
	NavbarContainer,
	NavbarWrapper,
	CartCount,
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
					<IconLogo src={logo} alt="logo" />
				</Link>
				<IconLogoMobile onClick={() => changeClick()}>
					{click ? <FaTimes /> : <FaBars />}
				</IconLogoMobile>

				<Menu click={click}>
					<MenuItem to="/artworks" onClick={() => changeClick()}>
						<MenuItemLink>ARTWORKS</MenuItemLink>
					</MenuItem>
					<MenuItem to="/artists" onClick={() => changeClick()}>
						<MenuItemLink>ARTISTS</MenuItemLink>
					</MenuItem>
					<MenuItem to="/about" onClick={() => changeClick()}>
						<MenuItemLink>ABOUT US</MenuItemLink>
					</MenuItem>
					<MenuItem to="/cart" onClick={() => changeClick()}>
						<CartIcon />
						{cart.length > 0 && <CartCount>{cartIconTotal()}</CartCount>}
					</MenuItem>
				</Menu>
			</NavbarWrapper>
		</NavbarContainer>
	);
}

export default NavBar;
