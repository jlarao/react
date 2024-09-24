import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";
import { onChecking, onLogin, onLogout, clearErrorMessage } from "../store";


export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        
        console.log({ email, password });

        try {
            dispatch( onChecking({}) );

            const { data } = await calendarApi.post('/auth/', { email, password });
            // console.log({ resp });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            console.log({ error });
            dispatch( onLogout('credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegister = async({ name, email, password }) => {

        try {

            const { data } = await calendarApi.post('/auth/new', { name, email, password });
            console.log({ data });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            // dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
        } catch (error) {
            console.log({ error });
            dispatch( onLogout( error.response.data?.msg || 'Hubo un error' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthtoken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );
        try {
            const { data } = await calendarApi.get('auth/renew');
            console.log({ data });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        console.log('logout');
        localStorage.clear();
        dispatch( onLogout() );
    }

    return {
        // propiedades
        errorMessage,
        status,
        user,
        // metodos
        startLogin,
        startRegister,
        checkAuthtoken,
        startLogout,
    }

}