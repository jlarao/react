import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link  as RouterLink} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  useMemo } from "react";
import { startGoogleSignIn, startLoginWithEmailPassword} from "../../store/auth/thunks";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
    email: '',
    password: '',
}
export const LoginPage = () => {

    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector( state => state.auth);

    const { email, password, onInputChange} = useForm(formData);

    const isAuthenticating = useMemo( () => status === 'cheking', [ status] );

    const onSubmit = (event) => {
        // console.log({ email, password });
        event.preventDefault();
        // dispatch(checkingAuthentication(email, password));
        dispatch( startLoginWithEmailPassword({email, password}));

    }

    const onGoogleSignIn = () =>{
        console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn() );
    }

    // useEffect(() => {
    //     dispatch(checkingAuthentication(email, password));
    // })
    // const errorMessage = 'Email or Password are incorrect';
    
    return (
        
            <AuthLayout title="Login!!!">

                <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
                    <Grid container>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}
                            display = { !!errorMessage? '' : 'none'}>
                            <Alert severity="error">
                                { errorMessage }
                            </Alert>
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Email"
                                type="email"
                                placeholder="Email"
                                fullWidth
                                name='email'
                                value={ email }
                                onInput={ onInputChange }
                            />
                        </Grid>

                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Password"
                                type="password"
                                placeholder="Password"
                                fullWidth
                                name='password'
                                value={ password }
                                onInput={ onInputChange }
                            />
                        </Grid>

                        <Grid 
                            container spacing={ 2 } 
                            sx={{ mb: 2, mt: 1 }}>
                            
                            {/* <Grid item 
                            xs={ 12 } 
                            display={ !!errorMessage ? '' : 'none' }>
                                <Alert severity="error">
                                    { errorMessage }
                                </Alert>
                            </Grid> */}

                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button 
                                    disabled= { isAuthenticating}
                                    type="submit"
                                    variant="contained" 
                                    fullWidth>
                                    Login
                                </Button>
                            </Grid>

                            
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button 
                                    disabled = { isAuthenticating}
                                    variant="contained" 
                                    fullWidth
                                    onClick={ onGoogleSignIn}>
                                        <Typography sx={{ mr: 1 }}>
                                            Google
                                        </Typography>                                    
                                </Button>
                            </Grid>
                        </Grid>
                        
                        <Grid container 
                            direction="row" 
                            justifyContent="end">
                            <Link
                                component={ RouterLink } 
                                color="inherit" 
                                to="/auth/register">
                                Create new account
                            </Link>
                        </Grid>
                    </Grid>
                </form>

            </AuthLayout>
        
    )
}