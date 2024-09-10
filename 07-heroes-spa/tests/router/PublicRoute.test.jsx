import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('test publicroute', () => {
    
    test('debe mostrar el children si no esta autenticado', () => {  
        
        const constextValue = {
            logged: false
        }

        render(
        <AuthContext.Provider value={ constextValue }>
            < PublicRoute >
                <h1>Ruta publica</h1>
            </PublicRoute>
        </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta publica')).toBeTruthy();
        screen.debug();
        
    });


    test('debe de navegar si esta autenticado', () => {
        const constextValue = {
            logged: true,
            user: { name: 'Fernando', id: '123' }
        };

        render(
            <AuthContext.Provider value={ constextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />

                        <Route path="marvel" element={<h1>Pagina privada marvel</h1>} />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina privada marvel')).toBeTruthy();
        screen.debug();

    });

})