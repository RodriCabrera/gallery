import React from "react";
import "./ItemListContainer.css";
import Card from "../../components/Card/Card";
import Masonry from "react-masonry-css";

const ItemListContainer = (props) => {
	const cardMap = () => {
		return props.items.map((item) => (
			<Card
				key={item.id}
				title={item.title}
				author={item.culture[0]}
				image={item.images.web.url}
			/>
		));
	};

	const breakpointColumnsObj = {
		default: 4,
		1000: 3,
		800: 2,
		450: 1,
	};

	return (
		<div className="artworks">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{props.items && cardMap()}
			</Masonry>
		</div>
	);
};

export default ItemListContainer;
