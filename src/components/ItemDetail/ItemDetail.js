import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = (props) => {
	const [quantity, setQuantity] = useState(0);

	const onAdd = (count) => {
		setQuantity(count);
	};

	return (
		<>
			{" "}
			<p style={{ margin: "1rem", fontFamily: "monospace" }}>
				<Link to="/artworks">{"<"}Back to Artworks</Link>
			</p>
			<div className="detail-container">
				<div className="detail-wrapper">
					<div className="detail-image-container">
						<img
							className="detail-image"
							src={`https://openaccess-cdn.clevelandart.org/${props.data.accession_number}/${props.data.accession_number}_web.jpg`}
							alt="caption"
						/>
					</div>
					<div className="detail-content">
						<div>
							<h4>{props.data.title}</h4>
							<h6>{props.data.culture}</h6>
							<p>{props.data.wall_description}</p>
							<p>Extra fact: {props.data.fun_fact}</p>
							<p>Technique: {props.data.technique}</p>
						</div>
						<div className="buyprints">
							<h6>Buy Prints</h6>
							<ItemCount onAdd={onAdd} />
							<p>Quantity selected: {quantity}</p>
							<button className="cart-button">
								<Link to="/Cart">GO TO CART</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
