import React from "react";
import { CartContainer, CartWrapper } from "../containers/Cart/Cart.elements";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
	const { cart } = useCartContext();
	console.log(cart);
	return (
		<>
			<CartContainer>
				<CartWrapper>In Cart</CartWrapper>
			</CartContainer>
		</>
	);
};

export default Cart;
