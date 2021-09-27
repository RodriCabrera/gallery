import React, { useState, useContext } from "react";

export const CartContext = React.createContext({
	id: undefined,
	quantity: undefined,
});

export const CartProvider = ({ children }) => {
	// El cart va a ser un array con objetos (los productos)
	const [cart, setCart] = useState([
		{ id: undefined, quantity: undefined, title: undefined, img: undefined },
	]);

	const addItem = (itemId, title, quantity) => {
		setCart([{ id: itemId, title: title, quantity: quantity }]);
	};

	const removeItem = (removeId) => {
		for (var i = 0; i < cart.length; i++) {
			if (cart[i].id === removeId) {
				setCart(cart.splice(i, 1));
			}
		}
	};

	const isInCart = (isId) => {
		let exists;
		for (var i = 0; i < cart.length; i++) {
			if (cart[i].id === isId) {
				exists = true;
			} else exists = false;
		}

		return exists;
	};

	const clear = () => {
		return setCart([]);
	};

	const logCart = () => {
		console.log(cart);
	};

	return (
		<CartContext.Provider
			value={{ cart, addItem, removeItem, isInCart, clear, logCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error(
			"El hook useCartContext debe ser usado dentro de un CartProvider. No seas pavo."
		);
	}
	return context;
};
