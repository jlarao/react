import { useCounter } from "../hooks/UseCounter";

export const CounterWithCustomHook = () => {
    
    const { counter, handleAdd, handleReset, handleSubtract} = 
    useCounter();
    
    
    return (
        <div>
            <h1>Custom use Hook: { counter }</h1>
            <hr />
            <button className="btn btn-primary" 
            onClick={() =>handleSubtract(2)}>-1</button>
            <button className="btn btn-primary"
            onClick={handleReset}>Reset</button>
            <button className="btn btn-primary"
            onClick={()=>handleAdd(2)}>+1</button>
        </div>
    );
}