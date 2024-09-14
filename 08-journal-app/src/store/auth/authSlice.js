import { createSlice } from '@reduxjs/toolkit';

export const authSlices = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'authenticated', 'not-authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state,  { payload }  ) => {
            state.status = 'authenticated'; // 'checking', 'authenticated', 'not-authenticated;
            state.uid =payload.uid;
            state.email =payload.email;
            state.displayName =payload.displayName;
            state.photoURL =payload.photoURL;
            state.errorMessage = null;
        },

        logout(state, {payload}){   
                console.log({payload});         
                state.status = 'not-authenticated'; // 'checking', 'authenticated', 'not-authenticated;
                state.uid = null;
                state.email = null;
                state.displayName = null;
                state.photoURL = null;
                state.errorMessage = payload?.errorMessage;
            
        },

        checkingCredentials(state, payload){
            // console.log('checking credentials');
            // console.log(payload);
            state.status = 'checking';
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlices.actions;