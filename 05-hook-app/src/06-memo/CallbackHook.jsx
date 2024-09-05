import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => {
        setCounter((c) => c + value);
    }, 
    []);
   
    return (
        <div>
            <h1>CallbackHook {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </div>
    )
}