import axios from "axios";
import { useEffect,useState } from "react";
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){
   //  const [PokemontList,setPokemontList]= useState([]);
   //  const [DataDownload,setDataDownload]= useState(true);
   //  const[ pokedexurl,setpokedexurl]=useState("https://pokeapi.co/api/v2/pokemon/");
   //  const [nexturl,setnexturl]=useState('');
   //  const[prevurl,setprevurl]=useState('');


   const[pokemonlistState, setpokemonlistState]=useState({
       PokemonList:[],
       isLoading:true,
       pokedexurl:"https://pokeapi.co/api/v2/pokemon/",
       nexturl:'',
       preurl:'',
   })
    async function pokemonDownload(){
      setpokemonlistState({...pokemonlistState, isLoading: true})
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