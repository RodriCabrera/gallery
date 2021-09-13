import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer.js";
import "./containers/ItemListContainer/ItemListContainer.css";
import Carousel from "./components/Carousel/Carousel";
import { useEffect, useState } from "react";

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		try {
			fetch(
				"https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&department=Art+of+the+Americas&limit=12&indent=1"
			)
				.then((res) => res.json())
				.then((result) => setItems(result.data));
		} catch (error) {
			console.log(error, "Falló request a la API.");
		}
	}, []);

	return (
		<div className="App">
			<NavBar />
			<Carousel />
			<ItemListContainer items={items} />
		</div>
	);
}

export default App;
