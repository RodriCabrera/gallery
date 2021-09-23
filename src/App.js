import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import CartContainer from "./containers/CartContainer/CartContainer";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import CartContext from "./context/CartContext";

function App() {
	return (
		<CartContext.Provider value={[]}>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/item/:id" component={Details} />
					<Route exact path="/cart" component={CartContainer} />
					<Route exact path="/artworks" component={ItemListContainer} />
					<Route path="*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		</CartContext.Provider>
	);
}

export default App;
