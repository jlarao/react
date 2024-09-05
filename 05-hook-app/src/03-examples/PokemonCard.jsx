import { useLayoutEffect, useRef } from "react"

export const PokemonCard = ({id, name, sprites}) => {
    const urlRef = useRef()
    
    useLayoutEffect(() => {
        console.log('urlRef', urlRef.current.getBoundingClientRect().x)
    }, [sprites])

    return (
        <div>
            <section style={{height: 200}}>
                <h2 className="text-capitalize">#{id} {name}</h2>
            
            <div>
                {sprites.map(sprite => (
                    <img ref={urlRef} src={sprite} alt={name} key={sprite} />
                ))}

            </div>
            </section>
        </div>
    )
}