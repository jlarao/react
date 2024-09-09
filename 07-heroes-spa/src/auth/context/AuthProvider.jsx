import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = {
//     logged: false
// }

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );
    
    return {
        logged: !!user,
        user
    }
}
export const AuthProvider = ({ children}) => {

    const [ authState, dispatch ] = 
    useReducer( authReducer, {} , init );

    const user = {
        id: 123,
        name: 'Fernando'
    }
    const login = (name ='') => {
        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify( user ));
        dispatch( action );
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        }
        dispatch( action );
    }

    return(
        <AuthContext.Provider value = {{
            ...authState,
            login,
            authState,
            logout
        }} >
            { children }
        </AuthContext.Provider>
    )
}