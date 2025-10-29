import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css"
import PokemonDetail from "../pokemonDetail/PokemonDetail";
function Pokedex(){
     const [searchTerm , setsearchTerm]=useState('');
    return(
        <div className="poke_wraper">
            <Search updateSearchTerm={setsearchTerm}/>
            {(!searchTerm)?<PokemonList/>: <PokemonDetail key={searchTerm} pokemonName={searchTerm}/>} 
        </div>
    );
}
export default Pokedex;