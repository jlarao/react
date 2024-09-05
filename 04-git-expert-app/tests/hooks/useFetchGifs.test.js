import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas useFetchGifs', () => {

    test('debe de retornar un arreglo de imagenes y isLoading en true', () => {
        
        const { result } = renderHook( () => useFetchGifs('Dragon Ball') );
        console.log(result);
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('Dragon Ball') );
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 1000}
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
    
})