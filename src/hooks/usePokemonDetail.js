import axios from "axios";
import { useState,useEffect } from "react";


function usePokemonDetail(id,pokemonName){
 const [pokemon, setpokemon] = useState({
    name: "",
    image: "",
    weight: "",
    height: "",
    types: []
  });
async function PokemonDownload(){
   try{
    let response;
   if(pokemonName){
        response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
   }else{
        response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
   }
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
   }catch{
    console.log("something want wrong")
   }
}
const[pokemonlistState ,setpokemonlistState]=useState({})

useEffect(()=>{
    PokemonDownload();
},[])

return [pokemon];
}

export default usePokemonDetail;