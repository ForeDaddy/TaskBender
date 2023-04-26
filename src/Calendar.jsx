import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Calendar = () => {
  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event-main",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        let duration = eventEl.getAttribute("duration");
        return {
          title: title,
          id: id,
          duration: duration,
        };
      },
    });
  }, []);

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          googleCalendarPlugin,
        ]}
        googleCalendarApiKey="API KEY"
        events={{
          googleCalendarId:
            "2cd3a0643ecd0748f8cd0c3512ecab419cc4e86a60be27770065c4ffefbe2149@group.calendar.google.com",
        }}
        droppable={true}
        editable={true}
        initialView="timeGridDay"
        themeSystem="bootstrap"
      />
    </div>
  );
};

export default Calendar;
