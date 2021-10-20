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
			let oldQ = cart[index].quantity; // La cantidad vieja
			cart.splice(index, 1); // Saco la cantidad vieja.
			setCart([...cart, { item: item, quantity: quantity + oldQ }]);
		} else {
			setCart([...cart, { item: item, quantity: quantity }]);
		}
	};

	const editQty = (item, newQty) => {
		let index = cart.findIndex((e) => e.item.id === item.id); //Index del item
		cart[index].quantity = newQty; // Modifico la quantity del item.
		setCart([...cart]);
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

	const emptyCart = () => {
		return setCart([]);
	};
	const calculateTotal = () => {
		let num = 0;
		cart.forEach((elem) => {
			num += elem.quantity * elem.item.precio;
		});
		return num;
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeItem,
				isInCart,
				emptyCart,
				editQty,
				calculateTotal,
			}}
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
