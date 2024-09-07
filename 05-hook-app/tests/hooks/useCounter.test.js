import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/UseCounter";

describe('useCounter', () => {

    test('should return the initial value', () => {
        const { result } = renderHook(()=> useCounter());
        const { counter, handleAdd, handleSubtract, handleReset } = result.current;

        expect(counter).toBe(10);
        expect(handleSubtract).toEqual(expect.any(Function));
        expect(handleAdd).toEqual(expect.any(Function));
        expect(handleReset).toEqual(expect.any(Function));
        console.log(result.current);        
    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect(result.current.counter).toBe(100);
        
    });

    test('debe de incrementar/decrementar en 1 el counter', () => {
        const { result } = renderHook(  () => useCounter());
        const { handleAdd, handleSubtract, handleReset, counter} = result.current;

        act(()=> {            
            handleAdd();
            handleAdd(2);
        });
        expect(result.current.counter).toBe(13);

    });

    test('debe de decrementar en 1 el counter', () => {
        const { result } = renderHook(  () => useCounter());
        const { handleAdd, handleSubtract, handleReset, counter} = result.current;

        act(()=> {            
            handleSubtract();
            handleSubtract(2);
        });
        expect(result.current.counter).toBe(7);

    });

    test('debe de resetear el counter', () => {
        const { result } = renderHook(  () => useCounter());
        const { handleAdd, handleSubtract, handleReset, counter} = result.current;

        act(()=> { 
            handleSubtract();           
            handleReset();            
        });
        expect(result.current.counter).toBe(10);

    });
})