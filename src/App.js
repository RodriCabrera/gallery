import "./App.css";
import NavBar from "./components/Navbar/NavBar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/item/:id" component={Details} />
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
