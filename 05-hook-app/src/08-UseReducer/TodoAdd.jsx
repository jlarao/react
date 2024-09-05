import { useForm } from "../hooks";

export const TodoAdd = ({handleAddTodo}) => {
    const {description, onInputChange, onResetFrom } =     
    useForm({ description: ''});
    const onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(description.length);
        if(description.length <= 1) return;
        
        const newTodo = {
                id: new Date().getTime(),
                description: description,
                done: false
        }

        handleAddTodo(newTodo);
        onResetFrom();
        console.log(newTodo);
        console.log( {description} );
        
    }

    
    return(
        <form onSubmit={onFormSubmit}>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="What needs to be done?"
                        // description={description}
                        onChange={onInputChange}
                        value={description}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1 btn-block"
                        
>
                        Add
                    </button>


                </form>
    );
}