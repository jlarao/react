import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const  Layout = () => {
    const {counter, handleAdd,  handleSubtract} = useCounter(1)
    const { data, isLoading, hasError, error } = 
    useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Information de pokemon</h1>
            <hr />
            { isLoading ? <LoadingMessage /> 
            : (<PokemonCard
                id={data.id} 
                name={data.name} 
                sprites={[
                    data.sprites.front_default, 
                    data.sprites.front_shiny, 
                    data.sprites.back_default, 
                    data.sprites.back_shiny
                    ]} /> )}

            { hasError && <h2>{ error }</h2> }
            {/* <h2>{ data?.name }</h2> */}

            <button className="btn btn-primary mb-2"
            onClick={() => counter > 1 ? handleSubtract(1) : null}>
                anterior</button>

            <button className="btn btn-primary mb-2"
            onClick={() => handleAdd(1)}>
                siguiente</button>

        </>
    )
}