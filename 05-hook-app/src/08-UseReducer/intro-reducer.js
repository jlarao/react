const initialState = [     {
        id: 1,
        todo: 'Recolectar la piedra del alma',
        done: false
    }     ];

const todoReducer = (state = initialState, action = {}) => {
    if(action?.type === 'add') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);
console.log(todos);