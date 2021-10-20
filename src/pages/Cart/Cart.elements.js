import styled from "styled-components";

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 60vh;
	margin: 3rem;
`;
export const CartWrapper = styled.div`
	max-width: 1000px;
	width: 100%;
	height: 100%;
	background-color: lightgrey;
	padding: 1rem;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
export const CartItemContents = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 1rem;
`;
export const ImageContainer = styled.div`
	margin-right: 5px;
	width: 150px;
`;
export const ItemImage = styled.img`
	width: 100%;
	height: auto;
	max-height: 100%;
`;
export const CartItemData = styled.div`
	display: flex;
	flex-direction: column;
`;
export const QuantityContainer = styled.div`
	display: flex;
	align-items: baseline;
`;
export const CartItem = styled.div``;

export const CartButton = styled.button.attrs((props) => ({
	size: props.size || "1rem",
	hover: props.hoverColor || "orange",
	bgColor: props.bgColor || "black",
}))`
	background-color: ${(props) => props.bgColor};
	color: white;
	padding: 0.5rem;
	margin-bottom: 0.5rem;
	border: 0;
	font-family: monospace;
	font-size: ${(props) => props.size};
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
	transition: ease-out 0.3s all;
	&:hover {
		color: ${(props) => props.hoverColor};
		box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
			rgba(0, 0, 0, 0.22) 0px 10px 10px;
	}
	&:active {
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	}
`;

export const StyledSelect = styled.select`
	background-color: dimgrey;
	color: white;
	margin-left: 0.7rem;
	font-size: 1.2rem;
	font-family: monospace;
	border: 0;
	width: 50px;
	cursor: pointer;
`;
