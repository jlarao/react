import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"


const formData = {
    email: 'pisujo@gmail.com',
    password: '12345678',
    displayName: 'Pisujo',
}

const formValidations = {
    email : [(value)=> value.includes('@'), 'el correo debe tener una @'],
    password : [(value) => value.length >= 6, 'el password debe de tener mas de 6 letras'],
    displayName : [(value) => value.length >= 1, 'el nombre es obligatorio'],
}
export const RegisterPage = () => {

    const dispatch = useDispatch();

    const[ formSubmitted, setFormSubmitted] = useState(false);
    const {status, errorMessage} =  useSelector( state => state.auth);
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

    const { 
        displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid} = useForm( formData, formValidations );

    const onSubmit = (event) =>{

        event.preventDefault();
        // console.log(formData);
        setFormSubmitted(true);
        
        if(!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState))
    }
    return (
        
        <AuthLayout title="Crear Cuenta">
            <h1> Form  { isFormValid ? 'Valido' : 'Incorrecto' }</h1>

            <form onSubmit={ onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Nombre Completo"
                                type="text"
                                placeholder="Nombre"
                                fullWidth
                                name = "displayName"
                                value = { displayName}
                                onChange={ onInputChange}
                                error={ !!displayNameValid && formSubmitted}
                                helperText={ displayNameValid}
                            />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="Email"
                            fullWidth
                            name = "email"
                            value = { email}
                            onChange={ onInputChange}
                            error={ !!emailValid && formSubmitted}
                            helperText={ emailValid}
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Password"
                            fullWidth
                            name = "password"
                            value = { password}
                            onChange={ onInputChange}
                            error={ !!passwordValid && formSubmitted}
                            helperText={ passwordValid}
                        />
                    </Grid>

                    <Grid 
                        container 
                        sx={{ mb: 2, mt: 1 }}>
                        

                        <Grid item 
                            xs={ 12 }
                            display={ !!errorMessage? '' : 'none'}>
                            <Alert severity="error">{ errorMessage}</Alert>
                        </Grid>

                        <Grid item xs={ 12 } >
                            <Button
                                disabled = { isCheckingAuthentication}
                                type="submit"
                                variant="contained" 
                                fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
                    
                    <Grid container 
                        direction="row" 
                        justifyContent="end">
                            <Typography sx={{ mr: 1 }}> Ya tenes una cuenta?</Typography>

                        <Link
                            component={ RouterLink } 
                            color="inherit" 
                            to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </AuthLayout>
    
)
}