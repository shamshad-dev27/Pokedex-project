
import { Link } from 'react-router-dom';
import './App.css';
import Pokedex from './component/Pokedex/Pokedex';
import CostomRouter from './costomRouter/CostomRouter';

function App() {
  return (
   <div className="header_wrapper"><h1 id="pokedex_header"><Link to="/">Pokedex</Link></h1>
   <CostomRouter/>
   </div> 
  );
}

export default App;
