import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/Navbar";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('test Navbar', () => {

    const contextValue = {
        logged: true,
        user: { name: 'Fernando', id: '123' },
        logout: jest.fn(),
    };

    test('debe de mostrar el nombre del usuario si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: { name: 'Fernando', id: '123' }
        };


    });

    beforeEach(() => jest.clearAllMocks());

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        const logoutbutton = screen.getByRole('button'); 
        fireEvent.click(logoutbutton);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
        screen.debug();
    });

})