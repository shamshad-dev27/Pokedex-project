import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetail.css';
function PokemonDetail(){
const {id}=useParams();
 const [pokemon, setpokemon] = useState({
    name: "",
    image: "",
    weight: "",
    height: "",
    types: []
  });
async function PokemonDownload(){
   const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    setpokemon({
        name:response.data.name,
        image:response.data.sprites.other.dream_world.front_default,
        weight:response.data.weight,
        height:response.data.height,
        types:response.data.types.map((t)=> t.type.name )
    })
}
useEffect(()=>{
    PokemonDownload();
},[])
return(
    <div className="Pokemon_detail_wrapper">
        <img  className="pokemon_Detail_image" src={pokemon.image} alt="#" />
        <div className="pokemon_name">name:<span>{pokemon.name}</span> </div>
        <div className="pokemon_name">weight:{pokemon.weight}</div>
        <div className="pokemon_name">height:{pokemon.height}</div>
        <div className="pokemon_detail_type">
            {pokemon.types && pokemon.types.map((t)=> <div className="type" key={t}> {t}</div>)}
        </div>
    </div>
);
}

export default PokemonDetail;