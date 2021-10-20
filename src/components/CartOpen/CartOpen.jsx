import React from "react";
import { CartWrapper } from "../../containers/CartContainer/Cart.elements";
import { useCartContext } from "../../context/CartContext";
import CartContent from "../../components/CartContent/CartContent";
import BuyerForm from "../../components/BuyerForm/BuyerForm";

const CartOpen = ({ handleCheckout, loading }) => {
	const { cart, calculateTotal } = useCartContext();

	return (
		<CartWrapper>
			{cart.length > 0 ? (
				loading ? (
					<h4>Please wait... Placing order...</h4>
				) : (
					<>
						<h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
							You've added to cart:
						</h1>
						<CartContent />
						<h5 style={{ textAlign: "end" }}>TOTAL: ${calculateTotal()}</h5>
						<hr />
						<BuyerForm handleCheckout={handleCheckout} />
					</>
				)
			) : (
				<p style={{ margin: "0" }}>The cart is empty.</p>
			)}
		</CartWrapper>
	);
};

export default CartOpen;
