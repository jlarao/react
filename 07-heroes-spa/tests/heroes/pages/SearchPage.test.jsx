import queryString from 'query-string';
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))
describe('test search page', () => {
    
    beforeAll(() => jest.clearAllMocks());

    test('debe de mostrarse correctamente con valores por defecto', () => {
        const { container } = render(
        <MemoryRouter>
            <SearchPage />
        </MemoryRouter>
       ); 


       expect( container ).toMatchSnapshot();
       
    //    screen.debug();
    });

    test('debe de mostrar a batman con query', () => {
        const { container } = render(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchPage />
        </MemoryRouter>
       ); 


        const inputValue = screen.getByRole('textbox');
        expect( inputValue.value ).toBe('batman');

        const image = screen.getByRole('img');
        expect(image.src).toContain('/assets/heroes/dc-batman.jpg');


        const div = screen.getByLabelText('alert-danger');
        expect(div.style.display).toBe('none');
    //    screen.debug();
    //    console.log(div.style);
    });

    test('debe de mostrar un error si no se encuentra el hero', () => {
        render(
            <MemoryRouter initialEntries={['search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
        const div = screen.getByLabelText('alert-danger');
        expect(div.style.display).toBe('');

        // screen.debug();
    });

    test('debe de llamar el push del navigate', () => {

            const inputValue = 'superman';
             render(
                <MemoryRouter  initialEntries={['/search']}>
                    <SearchPage />
                </MemoryRouter>
             );

             const input = screen.getByRole('textbox');
             fireEvent.change(
                input , {
                    target : 
                    {name : 'searchText' , value : inputValue}});

            const buton  = screen.getByRole('button');
            fireEvent.click(buton );
            //  screen.debug();

             expect( mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
    });

});