import React from "react";
import Carrousel from "../components/Carousel/Carousel";
import ItemListContainer from "../containers/ItemListContainer/ItemListContainer";

const Home = () => {
	return (
		<div>
			<Carrousel />
			<ItemListContainer />
		</div>
	);
};

export default Home;
