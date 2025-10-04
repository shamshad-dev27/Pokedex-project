function Pokemon({name,image}){
    return(
        <div>
            <p>{name}</p>
            <div><img src={image} alt="#" /></div>
        </div>
    );
}
export default Pokemon;