import { Route, Routes } from "react-router-dom";
import Pokedex from "../component/Pokedex/Pokedex";
import PokemonDetail from "../component/pokemonDetail/PokemonDetail";

function CostomRouter(){
    return (
      <Routes>
        <Route path="/" element={<Pokedex/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
      </Routes>

    );
}
export default CostomRouter;