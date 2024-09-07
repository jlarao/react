import { screen } from "@testing-library/dom";
import { todoReducer } from "../../src/08-UseReducer/todoReducer";

describe('test reducer' , () => {
    const initialState = [
        {
            id: 1,
            todo: 'aprender react',
            done: false,
        }       
    ]
    test('should return the initial value', () => {
        
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
        

    }) ;

    test('should add a new todo', () => {
        const action = {
            type : 'add',
            payload: {
                id: 2,
                todo: 'aprender jest',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

        // screen.debug();

    });
    
    test('should delete a todo', () => {
        const action = {
            type: 'delete',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        
    });

    test('should toggle a todo', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);

        // screen.debug();
    });
});