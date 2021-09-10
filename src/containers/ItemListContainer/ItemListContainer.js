import React from "react";
import "./ItemListContainer.css";
import Card from "../../components/Card/Card";

const ItemListContainer = (props) => {
	return (
		<div id="artworks">
			<h2>{props.greeting}</h2>
			<div className="itemList-wrapper">
                <Card />
                <Card />
                <Card />
				
            </div>
		</div>
	);
};

export default ItemListContainer;
