import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../Layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { useDispatch,  useSelector } from "react-redux"
import { startNewNote } from "../../store/Journal"

export const JournalPage = () => {
    const dispatch = useDispatch();
    const { isSaving , active: note } = useSelector( state => state.journal );
    const onClickNewNote = () =>{
        dispatch( startNewNote() );
    }
    return (
        <JournalLayout>

            {
                (!!note) ? 
                    <NoteView note={note}/> : <NothingSelectedView/>
            }
            <IconButton
                onClick={ onClickNewNote }
                disabled= { isSaving}
                size="large"
                sx = {{ 
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }} 
                >
                
                <AddOutlined sx={{ fontSize: 30 }} />

            </IconButton>
        </JournalLayout>
    )
}