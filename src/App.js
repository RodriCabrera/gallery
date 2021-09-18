import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer.js";
import "./containers/ItemListContainer/ItemListContainer.css";
import Carousel from "./components/Carousel/Carousel";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Carousel />
			<ItemListContainer />
			<ItemDetailContainer />
		</div>
	);
}

export default App;
