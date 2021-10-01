import React from "react";
import Masonry from "react-masonry-css";
import Item from "../Item/Item";
import "../../containers/ItemListContainer/ItemListContainer.css";

const ItemList = ({ data, selectedCategory }) => {
	const selectedCategoryId = parseInt(selectedCategory);

	// Array con los elementos que estén dentro de la categoria elegida:
	const filteredByCategory = data.filter((item) => {
		return item.categoryId === selectedCategoryId;
	});

	const itemMap = (items) => {
		return items.map((item) => (
			<Item
				fecha={item.fecha}
				id={item.id}
				key={item.id}
				titulo={item.titulo}
				autor={item.autor}
				image={item.image}
			/>
		));
	};

	// Responsive Grid:
	const breakpointColumnsObj = {
		default: 4,
		1000: 3,
		800: 2,
		450: 1,
	};
	function conditionalRendering() {
		return data ? (
			selectedCategory ? (
				itemMap(filteredByCategory)
			) : (
				itemMap(data)
			)
		) : (
			<p>no data</p>
		);
	}
	return (
		<div className="artworks">
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{/* Renderizado Condicional: 
				1ro tiene q haber data [sino no se va a poder renderizar nada]
				si no hay categoría elegida, renderizar toda la lista,
				sino la lista filtrada.
				*/}
				{conditionalRendering()}
			</Masonry>
		</div>
	);
};

export default ItemList;
