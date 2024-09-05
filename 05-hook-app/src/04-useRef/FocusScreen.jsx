import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input 
            ref={inputRef}
            type="text" 
            className="form-control" 
            placeholder="Username" />

            <button 
            className="btn btn-primary 
            mt-2"
            onClick={handleFocus}>
                Set Focus
            </button>
        </>
    )
}