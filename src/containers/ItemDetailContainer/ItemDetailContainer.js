import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(false);

	useEffect(() => {
		setloading(true);
		const urlId = "https://openaccess-api.clevelandart.org/api/artworks/129799";
		fetch(urlId)
			.then((res) => res.json())
			.then((res) => setData(res.data))
			.catch((error) => console.log(error, "Falló request a la API."))
			.finally(() => setloading(false));
	}, []);
	if (loading) {
		return <p>Loading...</p>;
	} else {
		return <ItemDetail data={data} />;
	}
};

export default ItemDetailContainer;
