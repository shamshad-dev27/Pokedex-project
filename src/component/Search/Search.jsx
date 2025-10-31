import useDebounce from "../../hooks/useDebounce";
import "./Search.css"
function Search({updateSearchTerm}){
   const updateuseDebounce=useDebounce((e)=>updateSearchTerm(e.target.value));
    return(
        <div className="search_wrapper">
        <input type="text" id="pokedex_search_box" placeholder="Pokedex...." onChange={updateuseDebounce} />
       
        </div>
    );
}
export default Search;