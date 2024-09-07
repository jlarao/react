import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);
    
    const handleAdd = (value = 1) => {
        setCounter((c) => c + value);
    }

    const handleSubtract = (value = 1) => {
        if(counter === 0) {
            return;
        }
        setCounter((c) => c - value);
    }

    const handleReset = () => {
        setCounter(initialValue);
    }
    return {
        counter : counter,
        handleAdd : handleAdd,
        handleSubtract: handleSubtract,
        handleReset: handleReset,

    }
}