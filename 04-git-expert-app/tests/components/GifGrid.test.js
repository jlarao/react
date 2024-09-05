import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');
describe('Test GifGrid', () => {
    const category = "Dragon Ball";
    test('debe mostrar el loading inmediatamente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });


        render(<GifGrid category={category} />);
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
        // screen.debug();
    });

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        
        useFetchGifs.mockReturnValue({
            images: [
                {
                    id: 'ABC',
                    title: 'Dragon Ball',
                    url: 'https://dragon-ball-super.fandom.com/wiki/Dragon_Ball_Super'
                }
            ],
            isLoading: false
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(1);
        screen.debug();
    })
})