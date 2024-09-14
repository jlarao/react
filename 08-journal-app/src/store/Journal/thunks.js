import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNotes, setPhotosToActiveNote, deleteNoteById } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";
import { getAuth } from "firebase/auth";

export const startNewNote = () =>{
    return async(dispatch, getState )=>{
        //todo isCreatingNewNote

        dispatch( savingNewNote());

        const { uid } = getState().auth;
        console.log('startNewNote');
        console.log({uid});
        
        const newNote = {
            // id: 1,
            title : '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc =  doc( collection(FirebaseDB, `${uid}/journal/notes`) );
        const setDocRest = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote));
        dispatch( setActiveNote( newNote));



    }
}

export const startLoadingNotes = () =>{
    return async(dispatch, getState) =>
    {
        const { uid } = getState().auth;
        if( !uid ){
            throw new Error(' El UID del usuario no existe');
        }
        
        const notes =  await loadNotes(uid);
        // console.log({ notes });
        dispatch( setNotes( notes));
    }
}

export const startSaveNote = () =>{
    return async(dispatch, getState) =>{

        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        console.log( note.id );
        console.log( noteToFireStore );

        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true});

        // noteToFireStore.id = note.id;
        dispatch( updateNotes( note ));

    }
}

export const startUploadingFiles = ( files = []) => {
    return async( dispatch ) =>{
        dispatch( setSaving() );
        console.log({ files });

        // await fileUpload(files[0]);
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
            
        }

        const photoUrls = await Promise.all( fileUploadPromises);
        dispatch( setPhotosToActiveNote( photoUrls ));
        
    }
}

export const startDeletingNote = () =>{
    return async(dispatch, getState) =>{

        const { uid } = getState().auth;
        const {active:note } = getState().journal;
        console.log(`${uid}/journal/notes/${note.id}`);
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);

        dispatch( deleteNoteById( note.id));
    }
}