import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ data }) => {
	const [quantity, setQuantity] = useState(0);

	const { addToCart } = useCartContext();

	const handleClick = () => {
		if (quantity > 0) {
			addToCart(data, quantity);
		}
	};

	return (
		<>
			<p style={{ margin: "1rem", fontFamily: "monospace" }}>
				<Link to="/artworks">{"<"}Back to Artworks</Link>
			</p>
			<div className="detail-container">
				<div className="detail-wrapper">
					<div className="detail-image-container">
						<img
							className="detail-image"
							src={`https://openaccess-cdn.clevelandart.org/${data.accession_number}/${data.accession_number}_web.jpg`}
							alt="caption"
						/>
					</div>
					<div className="detail-content">
						<div>
							<h4>{data.title}</h4>
							<h6>{data.culture}</h6>
							<p>{data.wall_description}</p>
							<p>Extra fact: {data.fun_fact}</p>
							<p>Technique: {data.technique}</p>
						</div>
						<div className="buyprints">
							<h6>Buy Prints</h6>
							{/* El ItemCount solamente trae la quantity. El botón de ADD TO CART (en este componente),
							tiene la lógica y el link*/}
							<ItemCount setQuantity={setQuantity} />
							{quantity > 0 && (
								<p>
									SELECTED: {quantity} x "{data.title}"
								</p>
							)}
							<button className="cart-button" onClick={handleClick}>
								<Link to="/Cart">ADD TO CART</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
