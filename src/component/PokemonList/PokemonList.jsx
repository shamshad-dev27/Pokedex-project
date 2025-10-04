import axios from "axios";
import { useEffect,useState } from "react";
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){
    const [PokemontList,setPokemontList]= useState([]);
    const [DataDownload,setDataDownload]= useState(true);
    const[ pokedexurl,setpokedexurl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [nexturl,setnexturl]=useState('');
    const[prevurl,setprevurl]=useState('');
    async function pokemonDownload(){
      setDataDownload(true);
     const response= await axios.get(pokedexurl)
     const pokemonResult=response.data.results;
     setnexturl(response.data.next);
     setprevurl(response.data.previous);
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
    },[pokedexurl]);
    return (
        <div className="pokemonList_wrapper">
        <div className="pokemom_wrapper">
         {DataDownload?'Loading....':PokemontList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)}
        </div>
        <div className="button_wrapper">
         <button disabled={prevurl==null} onClick={()=>setpokedexurl(prevurl)}>prev</button>
         <button disabled={nexturl==null} onClick={()=>setpokedexurl(nexturl)}>next</button>
        </div>
        </div>
    );
}

export default PokemonList;