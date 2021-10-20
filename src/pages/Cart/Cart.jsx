import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	CartButton,
	CartContainer,
	CartItem,
	CartItemContents,
	CartItemData,
	CartWrapper,
	ImageContainer,
	ItemImage,
	QuantityContainer,
	StyledSelect,
} from "./Cart.elements";
import { useCartContext } from "../../context/CartContext";
import BuyerForm from "../../components/BuyerForm/BuyerForm";
import { getFirestore } from "../../firebase";

const Cart = () => {
	const { cart, removeItem, editQty, emptyCart } = useCartContext();
	const [orderPlaced, setOrderPlaced] = useState(false);
	const [orderId, setOrderId] = useState(undefined);

	const mapItems = () =>
		cart.map((elem) => {
			return (
				<CartItem key={elem.item.id}>
					<CartItemContents>
						<ImageContainer>
							<ItemImage src={elem.item.image} />
						</ImageContainer>
						<CartItemData>
							<h5>{elem.item.titulo}</h5>
							<h6>Price: ${elem.item.precio}</h6>
							<QuantityContainer>
								<h6>Quantity: </h6>
								<StyledSelect
									defaultValue={elem.quantity}
									onChange={(e) => editQty(elem.item, parseInt(e.target.value))}
								>
									{[...Array(11).keys()].map((num) => (
										<option key={num} value={num}>
											{num}
										</option>
									))}
								</StyledSelect>
							</QuantityContainer>
							<h6>Subtotal: ${elem.item.precio * elem.quantity}</h6>
						</CartItemData>
					</CartItemContents>
					<CartButton
						hoverColor="red"
						bgColor="dimgrey"
						onClick={() => removeItem(elem.item.id)}
					>
						Remove from cart
					</CartButton>
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

	const handleCheckout = (name, email, phone) => {
		const newOrder = {
			buyer: { name: name, email: email, phone: phone },
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
			});
	};
	const orderInfo = (id) => {
		return (
			<>
				{orderId ? (
					<>
						<h3>Thank you! Your order has been placed.</h3>
						<h4>An email has been sent with the next steps.</h4>
						<h4>Order ID: {id}</h4>
					</>
				) : (
					<h4>Your order is being proccessed, please wait... </h4>
				)}
			</>
		);
	};
	return (
		<>
			<p style={{ margin: "1rem", fontFamily: "monospace" }}>
				<Link to="/artworks">{"<"}Back to Artworks</Link>
			</p>
			<CartContainer>
				{orderPlaced ? (
					orderInfo(orderId)
				) : (
					<CartWrapper>
						{cart.length > 0 && (
							<>
								<h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
									You've added to cart:
								</h1>
								{mapItems()}
								<h5 style={{ textAlign: "end" }}>TOTAL: ${calculateTotal()}</h5>
								<hr />
								<BuyerForm handleCheckout={handleCheckout} />
							</>
						)}
						{cart.length === 0 && "The cart is empty"}
					</CartWrapper>
				)}
			</CartContainer>
		</>
	);
};

export default Cart;
