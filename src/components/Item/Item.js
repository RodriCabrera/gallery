import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, autor, image }) => {
	return (
		<div className="card">
			<Link
				style={{ textDecoration: "none", color: "inherit" }}
				to={`/item/${id}`} //Link a la page Details
			>
				<img className="card-img" src={image} alt="" />
				<h4 className="card-title">{titulo}</h4>
				<h6 className="card-author">{autor}</h6>
			</Link>
		</div>
	);
};

export default Item;
