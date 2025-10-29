
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
function PokemonList(){
  const [pokemonlistState,setpokemonlistState]=usePokemonList(false);


    return (
        <div className="pokemonList_wrapper">
        <div className="pokemom_wrapper">
         {pokemonlistState.isLoading?'Loading....':pokemonlistState.PokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
        </div>
        <div className="button_wrapper">
         <button disabled={pokemonlistState.preurl==null} onClick={()=>{
            const pretoset=pokemonlistState.preurl
            setpokemonlistState({...pokemonlistState,pokedexurl:pretoset})

         }}>prev</button>
         <button disabled={pokemonlistState.nexturl==null} onClick={()=>
            {
               const nexttoset=pokemonlistState.nexturl
               setpokemonlistState({...pokemonlistState,pokedexurl:nexttoset})
            }
         }>next</button>
        </div>
        </div>
    );
}

export default PokemonList;