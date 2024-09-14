import { createSlice } from '@reduxjs/toolkit';

export const journalSlices = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote: (state) =>{
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action)=>{
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) =>{
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            // console.log(action);
            state.notes = action.payload;
            state.messageSaved = '';

        },
        setSaving: (state, acction) => {
            state.setSaving = true;
            state.messageSaved = '';
        },
        updateNotes: (state, action) =>{
            console.log({action});
            state.isSaving  = false;
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ){
                    return action.payload;
                }
                return note;
            });
            //mostrar mensaje de actualizacion
            state.messageSaved = `${ action.payload.title}, actualizada correctamente`;
        },
        deleteNoteById: (state, action) =>{
            state.notes = state.notes.filter(
                note => note.id !== action.payload
            );
            state.active = null;
            
        },
        setPhotosToActiveNote: (state, action) =>{
            state.active.imageUrls = 
            [ ...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogOut: (state)=>{
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    clearNotesLogOut,
    deleteNoteById, 
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNotes,
} = journalSlices.actions;