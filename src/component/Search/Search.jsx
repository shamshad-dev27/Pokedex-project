import "./Search.css"
function Search({updateSearchTerm}){
   
    return(
        <div className="search_wrapper">
        <input type="text" id="pokedex_search_box" placeholder="Pokedex...." onChange={(e)=>updateSearchTerm(e.target.value)} />
       
        </div>
    );
}
export default Search;