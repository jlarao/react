import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setActiveNote } from "../../store/Journal"

export const SidebarItem = ({title ='', body, id, date, imageUrls =[] }) => {
    // const { setActiveNote} = useSelector( state => state.journal);
    const dispatch = useDispatch();
    const onClicNote = () =>{
        // console.log('click note', id);
        dispatch(setActiveNote({id, title, body, date, imageUrls}));
    }
    const newTitle = useMemo( () => {
        // console.log(Title);
        return title.length > 17 ? title.substring(0, 17) + '...'
            : title   }, [title] );
    return(
    <ListItem disablePadding>
        <ListItemButton onClick={ onClicNote}>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
        
        
        <Grid container>
            <ListItemText primary={ newTitle }/>
            <ListItemText secondary={ body}/>
        </Grid>
        </ListItemButton>
    </ListItem>
    )
}