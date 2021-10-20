import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export const NavbarContainer = styled.div`
	width: 100%;
	height: 80px;
	position: sticky;
	top: 0;
	z-index: 99;
	padding: 0;
	margin: 0;
	background-color: white;
	font-family: monospace;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
export const NavbarWrapper = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1300px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	margin: auto;
`;
export const IconLogo = styled.img`
	height: 80px;
	margin: 0 5px;
	padding: 0;
	position: relative;
	top: 0px;
`;

export const Menu = styled.ul`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		/*click true: visible */
		left: ${({ click }) => (click ? 0 : "-100%")};
		flex-direction: column;
		transition: 0.5s all ease;
		background-color: #000000f4;
	}
`;

export const MenuItem = styled(Link)`
	text-decoration: none;
	height: 100%;
	padding: 0 1.5rem;
	display: flex;
	color: black;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 400;
	transition: background-color 0.2s ease-in-out;
	&:hover {
		background-color: #a5a5a550;
	}
	@media screen and (max-width: 960px) {
		width: 100%;
		height: 70px;
		&:hover {
			background-color: #2c2c2c50;
		}
	}
`;
export const MenuItemLink = styled.span`
	@media screen and (max-width: 960px) {
		font-size: 1.5rem;
		color: white;
	}
`;

export const IconLogoMobile = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: flex;
		font-size: 2rem;
		margin-right: 2rem;
	}
`;
export const CartIcon = styled(FiShoppingCart)`
	@media screen and (max-width: 960px) {
		color: white;
		font-size: 2rem;
	}
`;
export const CartCount = styled.div`
	background-color: darkgrey;
	margin-left: 2px;
	margin-bottom: 25px;
	/* font-size: 16px; */
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	text-align: center;
	transition: ease-out 0.3s all;
	@media screen and (max-width: 960px) {
		color: white;
	}
`;
