export const todoReducer = (initialState = [], action) => {
    switch(action.type){
        case 'add':
            //throw new Error('No se puede agregar un todo');
            return [...initialState, action.payload];
            // return initialState;
        case 'delete':
            return initialState.filter( todo => todo.id !== action.payload );
        case 'toggle':
            return initialState.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}