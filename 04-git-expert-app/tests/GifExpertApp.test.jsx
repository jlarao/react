import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Test GifExpertApp', () => {
   
    test('Should match', () => {
        render(<GifExpertApp/>);
        screen.debug();
    })
})