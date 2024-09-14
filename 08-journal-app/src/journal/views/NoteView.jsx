import { DeleteOutline, SaveOutlined, UploadFileOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/Journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
    const dispatch = useDispatch();
     const { active:note, messageSaved, isSaving } = useSelector( state => state.journal);

    const { body, title, date , formState, onInputChange,} = useForm( note );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    });

    const fileInputRef = useRef(); 

    useEffect( () => {
        dispatch( setActiveNote( formState ) );
    }, [ formState ] );

    useEffect( () => {
        if(messageSaved.length > 0){
            console.log('saved');
            Swal.fire({
                title: 'Nota actualizada',
                text: messageSaved,
                icon: 'success',
            });
        }
    }, [ messageSaved ]);    

    const onSaveNote = () =>{
        dispatch(startSaveNote()); 
        // console.log( 'save note' );
    }

    const onDelete =()=>{
        console.log('start delete note');
        dispatch(startDeletingNote()); 
    }
    const onFileInputChange = ({ target }) => {
        console.log( { target } );
        if( target.files === 0 ) return;
        // console.log( { target } );
        dispatch( startUploadingFiles( target.files));

    }
    return (
        <Grid container
            direction="row"
            justifyContent="space-between"
            className="animate__animated animate__fadeIn animate__faster"
            sx={{ mb : 1 }}>

            <Grid item>
                <Typography 
                   fontSize={ 39 }
                   fontWeight="light"
                    >
                    { dateString }
                </Typography>
            </Grid>

            <input type="file" 
                multiple
                ref={ fileInputRef}
                onChange={ onFileInputChange}
                style={{ display : 'none'}}
                 />

            <IconButton color="primary" 
                onClick={ () => fileInputRef.current.click() }
                disabled={ isSaving}>
                <UploadFileOutlined/>
            </IconButton>

            <Grid item>
                <button
                    disabled={ isSaving } 
                    onClick={ onSaveNote }
                    color=" primary" 
                    sx = {{ padding: 2 }}>
                    <SaveOutlined 
                    sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </button>
            </Grid>

            <Grid container>
                <TextField  
                type="text" 
                variant="filled" 
                fullWidth 
                placeholder="Ingrese un título"
                label="Título"
                name="title"
                value={ title }
                onChange={ onInputChange }
                sx ={{ border: 'none', mb: 1 }}/>

                <TextField  
                type="text" 
                variant="filled" 
                fullWidth 
                multiline
                name="body"
                value={ body }
                onChange={ onInputChange }
                placeholder="Que sucedio el día de hoy?"                
                minRows={5}/>

                <Grid container justifyContent={'end'}
                >
                    <Button 
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color="error"
                    >
                        <DeleteOutline />
                    </Button>
                </Grid>

                <ImageGallery images = { note.imageUrls }/>
                
            </Grid>
            
        </Grid>
    )
}