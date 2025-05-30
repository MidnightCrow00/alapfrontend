import './App.css';
import Szavak from './component/Szavak';
import { useContext } from 'react';
import { ApiContext } from './contexts/ApiContext';


function App() {
  const {szavakLista}=useContext(ApiContext);
  return (
    <div className="App">
      <header className="App-header">
    <h1>Szótár</h1>
      </header>

      <Szavak szavakLista={szavakLista}/>
    </div>
  );
}

export default App;
