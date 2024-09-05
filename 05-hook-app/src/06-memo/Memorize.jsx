import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
    const { handleAdd, counter } = useCounter(1);
    const [show, setShow] = useState(true);
    return (
        <>
            <h1>Counter <Small value={counter} /> </h1>
            
            <hr />
        
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