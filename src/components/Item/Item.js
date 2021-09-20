import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
	return (
		<div className="card">
			<Link
				style={{ textDecoration: "none", color: "inherit" }}
				to={`/item/${props.accession_number}`}
			>
				<img className="card-img" src={props.image} alt="" />
				<h4 className="card-title">{props.title}</h4>
				<h6 className="card-author">{props.author}</h6>
			</Link>
		</div>
	);
};

export default Item;
