import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { pokemons, isLoading, page } = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getPokemons());

    }, []);


    return(
        <>
            <h1>PokemonApp</h1>

            <span> Loading: { isLoading ? 'True' : 'False' } </span>

            <ul>
                { pokemons.map( pokemon => {
                    return(
                        <li key={ pokemon.name }> { pokemon.name } </li>
                    )
                })}
            </ul>

            <button onClick={ () => dispatch(getPokemons( page)) }>
                Next Page
            </button>
        </>
    )
}