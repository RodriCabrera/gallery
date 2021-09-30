import React from "react";
import "./ItemListContainer.css";
import { Spinner } from "react-bootstrap";

import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore } from "../../firebase";
import Categories from "../../components/Categories/Categories";

const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(false);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(); // selectedCategory es el categoryId

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
		setloading(true);
		const db = getFirestore();
		const artworks = db.collection("artworks");
		artworks
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.empty) {
					console.log("No ArtWorks from Firestore.");
				} else {
					setData(
						querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
					);
				}
			})
			.catch((err) => console.log("ERROR:", err))
			.finally(() => setloading(false));

		const categories = db.collection("categories");
		categories
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.empty) {
					console.log("No Categories from Firestore");
				} else {
					setCategories(
						querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
					);
				}
			})
			.catch((err) => console.log("ERROR:", err));
	}, []);
	return (
		<div style={{ backgroundColor: "rgb(238, 238, 238)" }}>
			<h2 className="itemListContainer-title">Featured Artworks</h2>

			<Categories
				categories={categories}
				setSelectedCategory={setSelectedCategory}
			/>
			{loading && (
				<div className="loading-container">
					<Spinner animation="border" />
					<h2>Loading...</h2>{" "}
				</div>
			)}
			<ItemList data={data} selectedCategory={selectedCategory} />
		</div>
	);
};

export default ItemListContainer;
