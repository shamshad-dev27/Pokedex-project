import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetail.css';
import usePokemonList from "../../hooks/usePokemonList";
import usePokemonDetail from "../../hooks/usePokemonDetail";
function PokemonDetail({pokemonName}){
const {id}=useParams();
const [pokemon]=usePokemonDetail(id,pokemonName); 
return(
    <div className="Pokemon_detail_wrapper">
        <img  className="pokemon_Detail_image" src={pokemon.image} alt="#" />
        <div className="pokemon_name">name:<span>{pokemon.name}</span> </div>
        <div className="pokemon_name">weight:{pokemon.weight}</div>
        <div className="pokemon_name">height:{pokemon.height}</div>
        <div className="pokemon_detail_type">
            {pokemon.types && pokemon.types.map((t)=> <div className="type" key={t}> {t}</div>)}
        </div>

        {
            pokemon.types&& pokemon.similarPokemon &&
            <div>
                more {pokemon.types} type pokemon
                <ul>
                    {pokemon.similarPokemon.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                </ul>
            </div>
        }
    </div>
);
}

export default PokemonDetail;