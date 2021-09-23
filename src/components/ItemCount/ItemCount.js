import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ onAdd }) => {
	const [count, setCount] = useState(1);
	const [stock] = useState(12);

	const addItem = () => {
		if (stock > count) {
			setCount(count + 1);
		}
	};

	return (
		<div className="itemContainer">
			<div className="quantity">
				<button className="cart-button" onClick={() => addItem()}>
					+
				</button>
				<p className="quantity-count">{count}</p>
				<button
					className="cart-button"
					onClick={() => setCount(Math.max(count - 1, 1))}
				>
					-
				</button>
			</div>
			<button className="cart-button" onClick={() => onAdd(count)}>
				Add to cart
			</button>
		</div>
	);
};

export default ItemCount;
