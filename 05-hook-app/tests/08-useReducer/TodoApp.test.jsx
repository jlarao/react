import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-UseReducer/TodoApp";
import { UseTodo } from "../../src/08-UseReducer/hooks/UseTodo";


jest.mock('../../src/08-UseReducer/hooks/UseTodo');

describe('prueba TodoApp', () => {
   

    UseTodo.mockReturnValue({

        todos: [
            {id: 1, description: 'aprender react', done: false},
            {id: 2, description: 'aprender jest', done: false}
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleAddTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    });
    
    test('debe de mostrar el TodoApp correctamente', () => {
        
        render(<TodoApp/>);
        expect(screen.getByText('aprender react')).toBeTruthy();
        expect(screen.getByText('aprender jest')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        console.log(screen.getByRole('textbox').innerHTML);
        // screen.debug();

    });
});