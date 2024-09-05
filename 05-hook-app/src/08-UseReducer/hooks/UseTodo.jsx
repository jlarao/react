import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const initialState = [];

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const UseTodo = () => { 
    
    const [todos, dispatch] = 
    useReducer( todoReducer, initialState, init );
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = ( newTodo ) =>{
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch( action );
        console.log( {todos} );
    }

    const handleDeleteTodo = ( id ) =>{
        dispatch({
            type: 'delete',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) =>{
        dispatch({
            type: 'toggle',
            payload: id
        })
    }
    return ({
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }); 
}