import React, { useState, useContext } from "react";

export const CartContext = React.createContext({
	id: undefined,
	quantity: undefined,
});

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item, quantity) => {
		if (isInCart(item.id)) {
			let index = cart.findIndex((e) => e.item.id === item.id); //Index del item repetido
			let oldQ = cart[index].quantity;
			cart.splice(index, 1); // La cantidad vieja
			setCart([...cart, { item: item, quantity: quantity + oldQ }]);
		} else {
			setCart([...cart, { item: item, quantity: quantity }]);
		}
	};

	const removeItem = (removeId) => {
		const newList = cart.filter((element) => element.item.id !== removeId);
		setCart(newList);
	};

	const isInCart = (id) => {
		return cart.find((element) => {
			if (element.item.id === id) {
				return element.item.id;
			} else {
				return false;
			}
		});
	};

	const clear = () => {
		return setCart([]);
	};

	const logCart = () => {
		console.log(cart);
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeItem, isInCart, clear, logCart }}
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
