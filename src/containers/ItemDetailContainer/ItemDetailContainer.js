import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = (props) => {
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(false);

	useEffect(() => {
		setloading(true);
		const urlId = `https://openaccess-api.clevelandart.org/api/artworks/${props.accession_number}`;
		fetch(urlId)
			.then((res) => res.json())
			.then((res) => setData(res.data))
			.catch((error) => console.log(error, "Falló request a la API."))
			.finally(() => setloading(false));
	}, [props.accession_number]);

	if (loading) {
		return (
			<>
				<p>Loading...</p>
				<Spinner animation="border" />
			</>
		);
	} else {
		return (
			<div style={{ backgroundColor: "whitesmoke" }}>
				<ItemDetail data={data} />
			</div>
		);
	}
};

export default ItemDetailContainer;
