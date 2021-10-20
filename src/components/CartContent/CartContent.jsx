import React from "react";
import { useCartContext } from "../../context/CartContext";
import {
	CartButton,
	CartItem,
	CartItemContents,
	CartItemData,
	ImageContainer,
	ItemImage,
	QuantityContainer,
	StyledSelect,
} from "../../containers/CartContainer/Cart.elements";
const CartContent = () => {
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
	return mapItems();
};

export default CartContent;
