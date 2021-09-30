import React from "react";
import Masonry from "react-masonry-css";
import Item from "../Item/Item";
import "../../containers/ItemListContainer/ItemListContainer.css";

const ItemList = ({ data }) => {
	const itemMap = () => {
		return data.map((item) => (
			<Item
				id={item.id}
				key={item.id}
				titulo={item.titulo}
				autor={item.autor}
				image={item.image}
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
				{data && itemMap()}
			</Masonry>
		</div>
	);
};

export default ItemList;
