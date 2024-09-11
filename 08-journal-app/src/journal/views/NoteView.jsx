import { SaveOutlined } from "@mui/icons-material"
import { Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {

    return (
        <Grid container
            direction="row"
            justifyContent="space-between"
            
            sx={{ mb : 1 }}>

            <Grid item>
                <Typography 
                   fontSize={ 39 }
                   fontWeight="light"
                    >
                    28 de agosto 2024
                </Typography>
            </Grid>

            <Grid item>
                <button color=" primary">
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
                sx ={{ border: 'none', mb: 1 }}/>

                <TextField  
                type="text" 
                variant="filled" 
                fullWidth 
                multiline
                placeholder="Que sucedio el día de hoy?"                
                minRows={5}/>

                <ImageGallery/>
                
            </Grid>
            
        </Grid>
    )
}