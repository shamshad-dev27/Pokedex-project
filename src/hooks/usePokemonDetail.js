import axios from "axios";
import { useState,useEffect } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetail(id){
 const [pokemon, setpokemon] = useState({
    name: "",
    image: "",
    weight: "",
    height: "",
    types: []
  });
async function PokemonDownload(){
   const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
   const pokemonOfSameType= axios.get(`https://pokeapi.co/api/v2/type/${response.data.types?response.data.types[0].type.name:" "}`)
    setpokemon(state =>({
        ...state,
        name:response.data.name,
        image:response.data.sprites.other.dream_world.front_default,
        weight:response.data.weight,
        height:response.data.height,
        types:response.data.types.map((t)=> t.type.name )
    }));
   
    pokemonOfSameType.then((response)=>{
        setpokemon(state =>({
        ...state,
        similarPokemon:response.data.pokemon.slice(0,5)
    }));
    })
}
const[pokemonlistState ,setpokemonlistState]=usePokemonList()

useEffect(()=>{
    PokemonDownload();
},[])

return [pokemon];
}

export default usePokemonDetail;