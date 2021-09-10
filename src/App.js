import './App.css';
import NavBar from './components/Navbar/NavBar.js';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.js';
import './containers/ItemListContainer/ItemListContainer.css'
import Carrousel from './components/Carrousel/Carrousel';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Carrousel/>
        <ItemListContainer greeting="Welcome!"/> 
    </div>
  );
}

export default App;
