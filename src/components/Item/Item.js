import React from "react";
import "./Item.css";

const Item = (props) => {
	console.log(props.image);
	return (
		<div className="card">
			<img className="card-img" src={props.image} alt="" />
			<h4 className="card-title">{props.title}</h4>
			<h6 className="card-author">{props.author}</h6>
		</div>
	);
};

export default Item;
