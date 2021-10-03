import React from "react";
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

const Cart = () => {
	const { cart, removeItem, editQty } = useCartContext();

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

	return (
		<>
			<p style={{ margin: "1rem", fontFamily: "monospace" }}>
				<Link to="/artworks">{"<"}Back to Artworks</Link>
			</p>
			<CartContainer>
				<CartWrapper>
					{cart.length > 0 && (
						<>
							<h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
								You've added to cart:
							</h1>
							{mapItems()}
							<h5>TOTAL: ${calculateTotal()}</h5>
							<CartButton size="1.5rem" hoverColor="lightgreen">
								PROCEED TO CHECKOUT
							</CartButton>
						</>
					)}
					{cart.length === 0 && "The cart is empty"}
				</CartWrapper>
			</CartContainer>
		</>
	);
};

export default Cart;
