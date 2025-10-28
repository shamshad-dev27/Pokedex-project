import axios from "axios";
import { useState ,useEffect} from "react";

function usePokemonList(){
  const[pokemonlistState, setpokemonlistState]=useState({
         PokemonList:[],
         isLoading:true,
         pokedexurl:"https://pokeapi.co/api/v2/pokemon/",
         nexturl:'',
         preurl:'',
     });
      async function pokemonDownload(){
      setpokemonlistState((state)=>({...state , isLoading: true}))
     const response= await axios.get(pokemonlistState.pokedexurl)
     const pokemonResult=response.data.results;
   
   setpokemonlistState((state)=>({
      ...state, 
      nexturl:response.data.next,
      preurl:response.data.previous,
   }))

     const pro =pokemonResult.map((pokedata)=>axios.get(pokedata.url));
     const pokemonData=await axios.all(pro);
     const data= pokemonData.map((poke)=>{
        const pokemon=poke.data;
        return {
           id: pokemon.id,
           name: pokemon.name,
           image:pokemon.sprites.other.dream_world.front_default ||
            pokemon.sprites.front_default,
           type: pokemon.types,
        }
     });
     setpokemonlistState((state)=>({
      ...state,
        PokemonList: data,
        isLoading:false,
     }));
   }


    useEffect(()=>{
          pokemonDownload();
       },[pokemonlistState.pokedexurl]);

       return [pokemonlistState ,setpokemonlistState];
}

export default usePokemonList;