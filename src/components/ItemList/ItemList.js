import React from "react";
import Masonry from "react-masonry-css";
import Item from "../Item/Item";
import "../../containers/ItemListContainer/ItemListContainer.css";

const ItemList = (props) => {
	const itemMap = () => {
		return props.data.map((item) => (
			<Item
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
			<h2 className="itemListContainer-title">Featured Artworks</h2>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{props.data && itemMap()}
			</Masonry>
		</div>
	);
};

export default ItemList;
