import axios from "axios";
import { useEffect,useState } from "react";
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){
    const [PokemontList,setPokemontList]= useState([]);
    const [DataDownload,setDataDownload]= useState(true);
    async function pokemonDownload(){
     const response= await axios.get("https://pokeapi.co/api/v2/pokemon/")
     const pokemonResult=response.data.results;
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
     setPokemontList(data);
     setDataDownload(false);
    }
    useEffect(()=>{
       pokemonDownload();
    },[]);
    return (
        <div className="pokemonList_wrapper">
        <div> pokemonList</div>
        {DataDownload?'Loading....':PokemontList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)}
        </div>
    );
}

export default PokemonList;