import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Login Page test', () => {

    const user= {
        id: 123,
        name: 'Tony',
        // email: 'k5LbZ@example.com'
    } 
   
    test('pruebas en login page', () => {
        render( 
        <UserContext.Provider value = { { user : null} }>
            <LoginPage />
        </UserContext.Provider>
         );

         const preTag = screen.getByLabelText('pre');
         expect(preTag.innerHTML).toBe('null');
         screen.debug();

    });

    test('debe de llamar el setuser cuando se hace submit', () => {
        const setUserMock = jest.fn();
        
        render(
        <UserContext.Provider value = { { user, setUser: setUserMock }}>
            <LoginPage />
        </UserContext.Provider>
        );

        const bnt = screen.getByRole('button');
        fireEvent.click(bnt);

        expect(setUserMock).toHaveBeenCalledWith({id:123, name:'Tony', email:'k5LbZ@example.com'});
    });
});