import React from "react";
import "./ItemListContainer.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		try {
			fetch(
				// "https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=8"
				// "https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&culture=andes&limit=10"
				"https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&department=Art+of+the+Americas&limit=10&indent=1"
			)
				.then((res) => res.json())
				.then((result) => setItems(result.data));
		} catch (error) {
			console.log(error, "Falló requesto a API.");
		}
	}, []);
	console.log(items);

	const cardMap = () => {
		return items.map((item) => (
			<Card
				title={item.title}
				author={item.culture[0]}
				image={item.images.web.url}
			/>
		));
	};

	return (
		<div id="artworks">
			<h2>{props.greeting}</h2>
			<div className="itemList-wrapper">
				{cardMap()}

				{/* {items
					? items.map((item) => (
							<Card
								title={item.title}
								author={item.creators[0].description}
								image={item.images.web.url}
							/>
					  ))
					: "Error"} */}

				{/* <Card
					title={items[0].title}
					author={items[0].creators[0].description}
					image={items[0].images.web.url}
				/> */}
			</div>
		</div>
	);
};

export default ItemListContainer;
