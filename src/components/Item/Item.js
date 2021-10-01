import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, autor, image, fecha }) => {
	return (
		<div className="card">
			<Link
				style={{ textDecoration: "none", color: "inherit" }}
				to={`/item/${id}`} //Link a la page Details
			>
				<img className="card-img" src={image} alt="artworks" />
				<h4 style={{ margin: "0" }} className="card-title">
					{titulo}
				</h4>
				<h6 className="card-author">
					{fecha} | {autor}
				</h6>
			</Link>
		</div>
	);
};

export default Item;
