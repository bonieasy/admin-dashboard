import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEevents] = useState([]);
    const handleDateClick = (selected) => {
        const title = prompt("Please enterr a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`))
        {
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full calendar interative page" />
            <Box display="flex">

            </Box>
        </Box>
    );
};

export default Calendar;