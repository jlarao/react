import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/UseCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/UseCounter');
describe('MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
        useCounter.mockReturnValue({
            counter: 1,
            handleAdd: mockIncrement
        });

    beforeEach( () => {
        jest.clearAllMocks();
    })
    test('should show MultipleCustomHooks', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        });

        render( <MultipleCustomHooks /> );
        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('Information de pokemon')).toBeTruthy();
        expect(screen.getByRole('button', { name: 'anterior' }));

        screen.debug();
    });

    test('should show MultipleCustomHooks', () => {

        useFetch.mockReturnValue({
            data: {
                id: 1, 
                name: 'pikachu', 
                sprites: {
                front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', 
                front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png', 
                back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png', 
                back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png'
            }
            ,
                isLoading: false,
                hasError: true,
                
            }
        }),

        render( <MultipleCustomHooks /> );

        // expect(screen.getByText('pikachu')).toBeTruthy();
        // expect(screen.getByRole('img', { name: 'pikachu' }));
        // screen.debug();
    });


    test('debe llamar la funcion de incrementar', () => {
        
        useFetch.mockReturnValue({
            data: {
                id: 1, 
                name: 'pikachu', 
                sprites: {
                front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', 
                front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png', 
                back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png', 
                back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png'
            }
            ,
                isLoading: false,
                hasError: true,            
            }
        });

        
 
        render(<MultipleCustomHooks />);
        
        const nextbtn = screen.getByRole('button', { name: 'siguiente' });
        fireEvent.click(nextbtn);

        expect(mockIncrement).toHaveBeenCalled();

        
    
        screen.debug();
    });
})