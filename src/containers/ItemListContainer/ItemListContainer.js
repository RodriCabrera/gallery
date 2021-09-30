import React from "react";
import "./ItemListContainer.css";
import { Spinner } from "react-bootstrap";

import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore } from "../../firebase";

const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(false);

	// useEffect(() => {
	// 	setloading(true);
	// 	const url =
	// 		"https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&department=Art+of+the+Americas&limit=12&indent=1";
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((result) => setData(result.data))
	// 		.catch((error) => console.log(error, "Falló request a la API."))
	// 		.finally(() => setloading(false));
	// }, []);

	useEffect(() => {
		const db = getFirestore();
		const artworks = db.collection("artworks");
		artworks
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.empty) {
					console.log("no hay productos");
				} else {
					setData(
						querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
					);
				}
			})
			.catch(() => {})
			.finally(() => setloading(false));
	}, []);

	return (
		<>
			<ItemList data={data} />
			{loading && (
				<div className="loading-container">
					<Spinner animation="border" />
					<h2>Loading...</h2>{" "}
				</div>
			)}
		</>
	);
};

export default ItemListContainer;
