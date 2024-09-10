import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
// import { AppRouter } from "../../src/router/AppRouter";
// const { heroes } = require('./../data/heroes');
describe('test app router', () => {
    
    test('debe mostrar el loign si no esta autenticado', () => {  
        
        const constextValue = {
            logged: false,
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ constextValue }>
                    {/* <AppRouter /> */}
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // expect(screen.getAllByText('Login').length).toBe(2);
        screen.debug();

    });
})