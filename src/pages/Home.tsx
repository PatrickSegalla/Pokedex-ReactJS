import CardPokemon from "../components/CardPokemon";
import NavBar from "../components/NavBar";
import "./Home.css";
import pokemonList from "../assets/pokemon.json"

function Home() {
    const {pokemons} = pokemonList;
    return (
    <>
        <NavBar />
        <h1 className="title">Encontre todos os pokémons em um só lugar</h1>

        <div className="list">
            {pokemons.map((pokemon, index) => { 
                return (
                <CardPokemon key={index} id={pokemon.id} name={pokemon.name} />
                );
            })};
        </div>
    </>
);
}

export default Home;