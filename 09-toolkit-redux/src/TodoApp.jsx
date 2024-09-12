import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    // const { isLoading, data: todos = []} = useGetTodosQuery();
    const [todoid, setTodoid] = useState(1);
    const {  data: todo, isLoading } = useGetTodoQuery(todoid);

    const nextTodo = () => {
        setTodoid(todoid + 1);
    }

    const prevTodo = () => {
        if(todoid === 1) return;
        setTodoid(todoid -1);
    }
// console.log(todo);
    return (
        <>
            <h1>TodoApp RTK Query</h1>
            <hr />
            <h4>isLoading {isLoading ? 'True' : 'False'} </h4>

            <pre>{ JSON.stringify(todo) }</pre>
            {/* <ul>
                { todos.map( todo => 
                    (
                        <li key={ todo.id }> <strong>{todo.completed ? '✅' : '❌'}</strong> { todo.title } </li>
                    )
                ) }
            </ul> */}
            <button onClick={prevTodo}>Prev Todo</button>
            <button onClick={nextTodo}>Next Todo</button>
        </>
    )
}