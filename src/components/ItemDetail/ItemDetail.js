import React from "react";
import "./ItemDetail.css";

const ItemDetail = (props) => {
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
				<button className="addToCart">Add to cart</button>
			</div>
		</article>
	);
};

export default ItemDetail;
