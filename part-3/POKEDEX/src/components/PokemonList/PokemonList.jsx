import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css"
import usePokemonList from "../hooks/usePokemonList";

// const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'
function PokemonList() {

  const {pokemonListState, setPokemonListState} = usePokemonList();

  return (
    <div className="pokemon-list-wrapper">
      <div>Pokemon List</div>
      <div className="pokemon-wrapper">
        {(pokemonListState.isLoading) ? 'Loading....' :
          pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)
        }
      </div>
      <div className="control-btns">
        <button disabled={pokemonListState.prevUrl == null} onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.prevUrl })}>Prev</button>
        <button disabled={pokemonListState.nextUrl == null} onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.nextUrl })}>Next</button>
      </div>
    </div>
  )

}

export default PokemonList;