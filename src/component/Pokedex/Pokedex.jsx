import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css"
function Pokedex(){
    return(
        <div className="poke_wraper">
            <h1 id="pokedex_header">Pokedex</h1>
            <Search/>
            <PokemonList/>
        </div>
    );
}
export default Pokedex;