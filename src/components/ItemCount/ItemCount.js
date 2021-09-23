import React from "react";
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
				{/* <select>
					<option value="" disabled>
						Quantity
					</option>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
				</select> */}
			</div>
			<button className="cart-button" onClick={() => onAdd(count)}>
				ADD TO CART
			</button>
		</div>
	);
};

export default ItemCount;
