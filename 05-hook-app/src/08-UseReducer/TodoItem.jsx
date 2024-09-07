export const TodoItem = ({ todo, handleDelete , onToggleTodo }) => {
    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <span className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : ''}`}
            onClick={ () =>  onToggleTodo(todo.id)}
            aria-label = 'span' >
                {todo.description}</span>
            <button onClick={() => handleDelete(todo.id)} className="btn btn-danger btn-sm float-end">Delete</button> 
        </li>
    )
}