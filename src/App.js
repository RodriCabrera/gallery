import './App.css';
import NavBar from './components/Navbar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import './components/ItemListContainer/ItemListContainer.css'

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="Welcome!"/> 
    </div>
  );
}

export default App;
