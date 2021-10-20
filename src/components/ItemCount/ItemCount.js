import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ setQuantity }) => {
	const [stock] = useState(10);

	function handleChange(e) {
		setQuantity(parseInt(e.target.value));
	}

	function mapOptions() {
		const options = [];
		for (let i = 1; i <= stock; i++) {
			options.push(i);
		}
		return options.map((num) => (
			<option value={num} key={num}>
				{num}
			</option>
		));
	}

	return (
		<div className="itemContainer">
			<div className="quantity">
				<select
					className="quantity-select"
					defaultValue="QUANTITY"
					onChange={handleChange}
				>
					<option key={0} disabled>
						QUANTITY
					</option>
					{mapOptions()}
				</select>
			</div>
		</div>
	);
};

export default ItemCount;
