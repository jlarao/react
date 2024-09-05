import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heacyStuff = (iterations = 100) => {
    for (let index = 0; index < iterations; index++) {
        console.log('ahis is heavy stuff');
    }
    return `${iterations} iterations done`;

}

export const MemoHook = () => {
    const { handleAdd, counter } = useCounter(1000);
    const [show, setShow] = useState(true);

    const  memorizedValue = useMemo( () => 
        heacyStuff(counter), [counter]);
    return (
        <>
            <h1>Counter <small>{ counter }</small> </h1>
            
            <hr />

            <h4>{ memorizedValue }</h4>
        
            <button 
                className="btn btn-primary"
                onClick={() => handleAdd(1)}>
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>

    )
}