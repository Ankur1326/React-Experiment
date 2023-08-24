import PokemonList from "../PokemonList/PokemonList";
import Search from "../search/Search";
import './Pokedex.css' // CSS import

function Pokedex() {

    return (
        <div className="pokedex-wrapper">
            <h1>Pokedex</h1>
            <Search />
            <PokemonList />
        </div>
    )
}

export default Pokedex;