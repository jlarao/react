import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [] , handleDelete , onToggleTodo}) => {

    return (
        <ul className="list-group list-group-flush">
                {
                    todos.map( todo => (
                        <TodoItem key={todo.id} todo={todo} 
                        handleDelete = {handleDelete}  onToggleTodo={onToggleTodo}/>
                    ))
                }
        </ul>
    )
}