import * as React from "react";

const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = React.useState([]);

	const logCart = () => {
		console.log(cart);
	};

	const addItem = (itemId, quantity) => {
		setCart(cart.push({ id: itemId, quantity: quantity }));
	};

	const removeItem = (removeId) => {
		for (var i = 0; i < cart.length; i++) {
			if (cart[i].id === removeId) {
				setCart(cart.splice(i, 1));
			}
		}
	};

	const isInCart = (isId) => {
		for (var i = 0; i < cart.length; i++) {
			if (cart[i].id === isId) {
				return true;
			} else return false;
		}
	};

	const clear = () => {
		return setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ addItem, removeItem, isInCart, clear, logCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	const context = React.useContext(CartContext);
	if (!context) {
		throw new Error(
			"El hook useUser debe ser usado dentro de un UserProvider. No seas pavo."
		);
	}
	return context;
};

export default CartContext;
