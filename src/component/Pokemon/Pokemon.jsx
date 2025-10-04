import "./Pokemon.css"
 function Pokemon({name,image}){
    return(
        <div className="pokemon_wrapper">
            <p className="name">{name}</p>
            <div><img   className="pokemon_image" src={image} alt="#" /></div>
        </div>
    );
}
export default Pokemon;