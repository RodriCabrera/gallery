import React from "react";
import { Link } from "react-router-dom";
import {
	CartContainer,
	CartItem,
	CartWrapper,
} from "../containers/Cart/Cart.elements";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
	const { cart, removeItem } = useCartContext();
	console.log(cart);

	const mapItems = () =>
		cart.map((elem) => {
			return (
				<CartItem key={elem.item.id}>
					<h5>{elem.item.titulo}</h5>
					<h6>Price: ${elem.item.precio}</h6>
					<h6>QTY: {elem.quantity}</h6>
					<button onClick={() => removeItem(elem.item.id)}>Remove</button>
					<button>
						<Link to={`/item/${elem.item.id}`}>Edit QTY</Link>
					</button>
					<hr />
				</CartItem>
			);
		});
	const calculateTotal = () => {
		let num = 0;
		cart.forEach((elem) => {
			num += elem.quantity * elem.item.precio;
		});
		return num;
	};
	return (
		<>
			<p style={{ marginLeft: "1rem", fontFamily: "monospace" }}>
				<Link to="/artworks">{"<"}Back to Artworks</Link>
			</p>
			<CartContainer>
				<CartWrapper>
					{cart.length > 0 && (
						<>
							<h1>You've added to cart:</h1>
							{mapItems()}
							<h5>TOTAL: ${calculateTotal()}</h5>
							<button>PROCEED TO CHECKOUT</button>
						</>
					)}
					{cart.length === 0 && "The cart is empty"}
				</CartWrapper>
			</CartContainer>
		</>
	);
};

export default Cart;
