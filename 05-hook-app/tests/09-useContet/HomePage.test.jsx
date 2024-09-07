import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('HomePage', () => {

    const user = {
        id: 123,
        name: 'Tony',
        // email: 'k5LbZ@example.com'
    }
    test('debe mostar el componente sin el usuario', () => {
        render(
        <UserContext.Provider value = { { user : null }}>
            <HomePage />
        </UserContext.Provider>    
            );

        const preTag = screen.getByLabelText('pre');
        console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();
    });

    test('debe mostar el componente con el usuario', () => {
        render(
        <UserContext.Provider value = { { user }}>
            <HomePage />
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        // expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
        expect(preTag.innerHTML).toContain(user.name);
        // expect(preTag.innerHTML).toContain(user.id.toString);
        expect(preTag.innerHTML).toContain(`${user.id}`);

        console.log(preTag.innerHTML);
    })
});