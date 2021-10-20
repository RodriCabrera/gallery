import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { getFirestore } from "../firebase";
import CartContainer from "../containers/CartContainer/CartContainer";

const Cart = () => {
	const { cart, emptyCart } = useCartContext();
	const [orderPlaced, setOrderPlaced] = useState(false);
	const [orderId, setOrderId] = useState(undefined);
	const [loading, setLoading] = useState(false);

	const handleCheckout = (buyer) => {
		setLoading(true);
		const newOrder = {
			buyer: { name: buyer.name, email: buyer.email, phone: buyer.phone },
			items: { ...cart },
			date: new Date(),
		};
		const db = getFirestore();
		const ordersCollection = db.collection("orders");
		ordersCollection
			.add(newOrder)
			.then((docRef) => {
				console.log("Se creó el documento exitosamente: ", docRef.id);
				setOrderId(docRef.id);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setOrderPlaced(true);
				emptyCart();
				setLoading(false);
			});
	};

	return (
		<CartContainer
			handleCheckout={handleCheckout}
			orderId={orderId}
			orderPlaced={orderPlaced}
			loading={loading}
		/>
	);
};

export default Cart;
