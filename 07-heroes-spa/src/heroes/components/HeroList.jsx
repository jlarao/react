import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers"
import { useCallback, useEffect, useMemo, useState } from "react";

export const HeroList = ({ publisher }) => {
    
    // const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    

    // console.log(heroes);
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}