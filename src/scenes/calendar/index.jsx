import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { formatDate } from "@fullcalendar/core";
import PromptModal from "./PromptModal";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [promptModalIsOpen, setPromptModalIsOpen] = useState(false);
  // const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
        location: "home",
      });
    }
  };

  const handleEventClick = (selected) => {
    console.log(123, selected.event);
    // if (
    //   window.confirm(
    //     `Are you sure you want to delete the event '${selected.event.title}'`
    //   )
    // ) {
    //   selected.event.remove();
    // }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Page" />
      {/* <Box>Colors</Box> */}

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 30%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variants="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor:
                    event.extendedProps.location === "home"
                      ? colors.redAccent[500]
                      : colors.grey[100],
                  margin: "10px 0",
                  borderRadius: "2px",
                  color: colors.grey[900],
                  cursor: "pointer",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        month: "long",
                        year: "numeric",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              multiMonthPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,multiMonthYear,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            eventClick={handleEventClick}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            eventsSet={(events) => setCurrentEvents(events)}
            // events={events}
            initialEvents={[
              {
                id: "1234",
                title: "Kansas",
                location: "home",
                // date: "2024-01-14",
                date: "2024-01-14T17:00:00",
                color: colors.redAccent[500],
              },
              {
                id: "4321",
                title: "Texas",
                location: "away",
                // date: "2024-01-19",
                start: "2024-01-19T19:00:00",
                color: colors.grey[100],
              },
              {
                id: "5678",
                title: "Oklahoma State",
                location: "home",
                // date: "2024-01-19",
                start: "2024-02-05T19:00:00",
                color: colors.redAccent[500],
              },
            ]}
          />
        </Box>
      </Box>
      {promptModalIsOpen && (
        <PromptModal setPromptModalIsOpen={setPromptModalIsOpen} />
      )}
    </Box>
  );
};

export default Calendar;
