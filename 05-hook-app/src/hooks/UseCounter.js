import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue = 10);
    
    const handleAdd = (value = 1) => {
        setCounter(counter + value);
    }

    const handleSubtract = (value) => {
        if(counter === 0) {
            return;
        }
        setCounter(counter - value);
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