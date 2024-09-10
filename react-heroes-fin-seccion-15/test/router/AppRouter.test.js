const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { AuthContext } = require("../../src/auth/context/AuthContext");
const { AppRouter } = require("../../src/router/AppRouter");

describe('AppRouter', () => {
    
    test('should display LoginPage when user is not logged', () => {
        const contextValue = {
            logged: false
        };

        render( 
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length).toBe(2);
        // screen.debug();

    });

    test(' debe de mostrar el componenete de marvel', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Test',
                id: 'ABC'
            }
        };

        render( 
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
        // screen.debug();
    });

    test('debe de llamar el logout y navigate cuando se hace click en logout', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Test',
                id: 'ABC'
            }
        };

        render( 
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        screen.debug();
    })
})