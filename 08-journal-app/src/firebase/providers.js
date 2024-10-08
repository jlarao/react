import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseApp, FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        console.log({credentials});

        const { displayName, email, photoURL, uid } = result.user
        
        return{
            ok: true,
            displayName, email, photoURL, uid
        }
        

    }catch(error){
        console.log({error});
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage,
        }
    }
}

export const reisterWithEmailPassword = async({ email, password, displayName}) =>{
    try {
        const result = await   createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL} = result.user;
        //todo actualizar el display name en firebase
        updateProfile(FirebaseAuth.currentUser , 
            { displayName}
        );
        return{
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        return{
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword = async({ password, email}) =>{
    try {
        // console.log(email);
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        console.log({result});
        const { uid, photoURL, displayName } = result.user;
        return {
            ok: true,
            uid, photoURL, email, displayName,
        }
    } catch (error) {
        console.log({error});
        return {
            ok: false,
            errorMessage: error.message
        }
        
    }

}

export const logoutFirebase = async() =>{
    return await FirebaseAuth.signOut();       
}