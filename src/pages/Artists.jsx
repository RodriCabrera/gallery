import React, { useEffect, useState } from "react";
import ArtistsList from "../components/ArtistsList/ArtistsList";
import { getFirestore } from "../firebase";

const Artists = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		//Apuntamos a la base de datos:
		const db = getFirestore();
		//Apuntamos a una colección:
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
			.catch((err) => console.log("ERROR:", err));
	}, []);

	return (
		<>
			<div>
				<ArtistsList data={data} />
			</div>
		</>
	);
	// Generar lista de los autores de la collection "artworks" de Firestore
};

export default Artists;
