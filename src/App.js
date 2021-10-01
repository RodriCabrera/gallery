import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import About from "./pages/About";
import Artists from "./pages/Artists";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<CartProvider value={[]}>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/item/:id" component={Details} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/artworks" component={ItemListContainer} />
					<Route exact path="/about" component={About} />
					<Route exact path="/artists" component={Artists} />
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
