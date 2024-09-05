import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);
    console.log(user);
    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button className="btn btn-primary" 
                onClick={() => setUser(
                    { name: 'Tony', id: 123, 
                    email: 'k5LbZ@example.com' 
                    })}>
                Set User
            </button>
        </>
    )
}