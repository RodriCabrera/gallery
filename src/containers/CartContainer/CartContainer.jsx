import React from "react";
import { Container } from "./Cart.elements";
import { Link } from "react-router-dom";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import CartOpen from "../../components/CartOpen/CartOpen";

const CartContainer = ({ handleCheckout, orderId, orderPlaced, loading }) => {
	return (
		<div>
			<Container>
				<p
					style={{
						margin: "1rem",
						fontFamily: "monospace",
					}}
				>
					<Link to="/artworks">{"<"}Back to Artworks</Link>
				</p>
				{orderPlaced ? (
					<OrderInfo id={orderId} />
				) : (
					<CartOpen handleCheckout={handleCheckout} loading={loading} />
				)}
			</Container>
		</div>
	);
};

export default CartContainer;
