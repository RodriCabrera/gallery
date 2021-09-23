import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = (props) => {
	const [quantity, setQuantity] = useState(0);

	const onAdd = (count) => {
		setQuantity(count);
	};

	return (
		<article className="detail">
			<img
				className="detail-image"
				src={`https://openaccess-cdn.clevelandart.org/${props.data.accession_number}/${props.data.accession_number}_web.jpg`}
				alt="caption"
			/>
			<div className="detail-info">
				<h4>{props.data.title}</h4>
				<h6>{props.data.culture}</h6>
				<p>{props.data.wall_description}</p>
				<p>Technique: {props.data.technique}</p>
				<p>Extra fact: {props.data.fun_fact}</p>
				<ItemCount onAdd={onAdd} />
				<p>Seleccionados para comprar: {quantity}</p>
			</div>
		</article>
	);
};

export default ItemDetail;
