import { Navigate, Route, Routes } from "react-router-dom"
import { CalendarPage } from "../calendar";
import { LoginPage } from "../auth";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";

export const AppRouter = () => {
    // const authStatus = 'non-authenticated';
    const { checkAuthtoken, status } = useAuthStore();
    
    console.log({ status });
    useEffect(() => {
            checkAuthtoken();
    }, []);

    if( status === 'checking' ){
        return ( <h1>Cargando...</h1>);
    }


    return (
        <div>
            <>
            <Routes >
                {   (status === 'not-authenticated') ?
                (
                    <>
                        <Route path="/auth/*" element={<LoginPage />} />
                        <Route path="/*" element={<Navigate to="/auth/login"/> } />
                    </>
                )
                     :
                     (
                        <>
                         <Route path="/" element={<CalendarPage />} />
                         <Route path="/*" element={<Navigate to="/"/> } />
                        </>
                     )
                 } 


            </Routes>
        </>
        </div>
    )
}