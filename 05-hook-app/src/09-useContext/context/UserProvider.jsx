import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

    // const user = { name: 'Tony', id: 123, email: 'k5LbZ@example.com' }
    const [user, setUser] = useState();
    
    return (
        <UserContext.Provider value={ { user,  setUser}}>
            { children }
        </UserContext.Provider>
    )   
}