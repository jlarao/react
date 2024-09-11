import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../Layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {

    return (
        <JournalLayout>
            {/* <Typography variant="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita velit ab delectus pariatur ex nesciunt neque odit quasi quam dignissimos, omnis tempore sint, distinctio magni, laudantium doloremque voluptates eos enim.
            </Typography> */}
            <NothingSelectedView/>
            {/* <NoteView/> */}
            <IconButton
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