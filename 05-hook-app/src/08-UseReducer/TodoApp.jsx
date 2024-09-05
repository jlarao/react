import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { UseTodo } from "./hooks/UseTodo";


export const TodoApp = () =>{
    //use todo
    const {todos, todosCount, pendingTodosCount, handleAddTodo, handleDeleteTodo, handleToggleTodo} = UseTodo();

    return (
        <>
            <h1>TodoApp: {todosCount} <small>pending: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}  
                    handleDelete={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}/>
                </div>

            <div className="col-5">
                <h4>Add Todo</h4>
                <hr />
                <TodoAdd handleAddTodo = {handleAddTodo}/>
            </div>
            </div>
        </>
    )
}