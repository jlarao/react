import { useDispatch, useSelector } from "react-redux";
import { calendarSlices, onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {
    
    const dispatch = useDispatch();
    const { 
        activeEvent, 
        events, 
        // setActiveEvent, 
        // startSavingEvent, 
        // startDeleteEvent, 
        // startLoadingEvents 
    } = useSelector(state => state.calendar);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent(calendarEvent) );
    }

    const startSavingEvent = ( calendarEvent ) => {
        // todo llegar al backend

        //todo bien
        if( calendarEvent._id ) {
            // Actualizando
            dispatch( onUpdateEvent( {...calendarEvent} ) );
        } else {
            // Creando
            console.log(calendarEvent);
            dispatch( onAddNewEvent( {...calendarEvent, _id: new Date().getTime()} ) );
        }
    }

    const startDeletingEvent = () => {

        // Todo
        dispatch( onDeleteEvent() );
        
    }

    return {
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        // startLoadingEvents
    }
}