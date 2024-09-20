import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvents = 
    {
        _id: new Date().getTime(),
        title: 'Big Meeting',
        notes: 'Notes',
        allDay: true,
        start: new Date(),
        end: addHours( new Date(),2),
        bgColor : '#fafafa',
        user: {
          _id: '123',
          name: 'Pepito'
        }
      }


export const calendarSlices = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvents
        ],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, { payload } ) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload } ) => {
            console.log(payload);
            state.events.push( payload );
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload } ) => {

            state.events = state.events.map( e => {
                if( e._id === payload._id ) {
                    return payload;
                }
                return e;
            });
        },
        onDeleteEvent: (state) => {
            if( state.activeEvent ) {
                state.events = state.events.filter( e => e._id !== state.activeEvent._id );
                state.activeEvent = null;
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    onSetActiveEvent,
    onAddNewEvent,
    onUpdateEvent,
    onDeleteEvent,
 } = calendarSlices.actions;