import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-UseReducer/TodoItem";

describe('TodoItem', () => {
    const todo = {
        id: 1,
        description: 'aprender react',
        done: false
    };

    const handleDelete = jest.fn();
    const onToggleTodo = jest.fn();

    test('should match with the snapshot', () => {
        
        render(
        <TodoItem todo={todo} 
            handleDelete={handleDelete} 
            onToggleTodo={onToggleTodo} />);

        const  liEle = screen.getByRole('listitem');
        expect(liEle.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanEle = screen.getByLabelText('span');
        console.log(spanEle.className);
        expect(spanEle.className).toContain('align-self-center');
        // screen.debug();

    });


    test('debe mostrar el todo completado', () => {
        todo.done = true;
        render(
            <TodoItem todo={todo}
                handleDelete={handleDelete}
                onToggleTodo={onToggleTodo} />

        );


        const spanEle = screen.getByLabelText('span');
        expect(spanEle.className).toContain('text-decoration-line-through');

        // screen.debug();
    });

    test('span debe llamar ', () => {
        todo.done = true;
        render(
            <TodoItem todo={todo}
                handleDelete={handleDelete}
                onToggleTodo={onToggleTodo} />

        );


        const spanEle = screen.getByLabelText('span');
        expect(spanEle.className).toContain('text-decoration-line-through');

        // screen.debug();
    });

    test('debe llamar el toggle', () => {
        render(
            <TodoItem todo={todo}
                handleDelete={handleDelete}
                onToggleTodo={onToggleTodo} />

        );
        const spanEle = screen.getByLabelText('span');
   
        fireEvent.click(spanEle);
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);        
    });

    test('debe llamar el delete', () => {
        render(<TodoItem todo={todo}
            handleDelete={handleDelete}
            onToggleTodo={onToggleTodo} />);

        const btnDelete = screen.getByRole('button');
        fireEvent.click(btnDelete);
        expect(handleDelete).toHaveBeenCalledWith(todo.id);
        // screen.debug();
        // console.log(btnDelete);

    })
});