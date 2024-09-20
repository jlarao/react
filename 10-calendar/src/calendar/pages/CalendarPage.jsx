import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../";

import { Calendar } from 'react-big-calendar'
import { localizer, getMessagesES } from '../../helper';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from "react";
import { useCalendarStore, useUiStore } from "../../hooks";

export const CalendarPage = () => {
    const { events, setActiveEvent } = useCalendarStore();
    const {openDateModal } = useUiStore();
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
            border: '0px',
            display: 'block'
        }
        return { style }
    }

    const onDoubleClick = (e) => {
        console.log(e);
        openDateModal();
    }

    const onSelect = (e) => {
        console.log(e);
        setActiveEvent(e);
    }

    const onViewChange = (e) => {
        console.log(e);
        localStorage.setItem('lastView', e);
        // setLastView(e);
    }

    return (
        <>
            <Navbar />
            <h1>Calendar Page 1</h1>

            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
                />

                <CalendarModal />
                <FabAddNew />
                <FabDelete />
        </>
    )
}