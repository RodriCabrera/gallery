import React from "react";

const OrderInfo = ({ id }) => {
	return (
		<>
			<h3>Thank you! Your order has been placed.</h3>
			<h4>An email has been sent with the next steps.</h4>
			<h4>Order ID: {id}</h4>
		</>
	);
};

export default OrderInfo;
