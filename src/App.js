//import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js'
import Cards from './components/Cards.js'
import SearchBar from './components/SearchBar.js'
import characters, { Rick } from './data.js'

function App() {
  return (
    <div className="App" style={{ padding: '25px' }}>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  );
}

export default App;
