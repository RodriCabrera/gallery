import React from "react";
import "./Card.css";
import ItemCount from "../../components/ItemCount/ItemCount";

const Card = (props) => {
	return (
		<div className="card">
			<img className="card-img" src={props.image} alt="" />
			<h4 className="card-title">{props.title}</h4>
			<h6 className="card-author">{props.author}</h6>
			<ItemCount />
		</div>
	);
};

export default Card;
