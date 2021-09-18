import React from "react";
import "./ItemListContainer.css";
// import Card from "../../components/Card/Card";
// import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(false);

	useEffect(() => {
		setloading(true);
		const url =
			"https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&department=Art+of+the+Americas&limit=12&indent=1";
		fetch(url)
			.then((res) => res.json())
			.then((result) => setData(result.data))
			.catch((error) => console.log(error, "Falló request a la API."))
			.finally(() => setloading(false));
	}, []);

	return (
		<>
			<ItemList data={data} />
			{loading && <h4>Loading content...</h4>}
		</>
	);
};

export default ItemListContainer;
