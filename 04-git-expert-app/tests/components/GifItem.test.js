import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Test en <GifItem.js>', () => {
    const title = "Dragon Ball";
    const url = "https://dragon-ball-super.fandom.com/wiki/Dragon_Ball_Super";
    
    test('match con el Snapshot', () => {

        const { container} = render(
        <GifItem 
            title={title} 
            url ={url} 
            />);

        render(<GifItem title={title} url ={url} />);

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title= {title} url={url} />);
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title= {title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })


})