import React, { useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

const Calendar = () => {

  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event-main",
      eventData: function(eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        let duration = eventEl.getAttribute("duration");
        return {
          title: title,
          id: id,
          duration: duration
        };
      }
    });
  }, []);

  return (
    <div className="calendar">
      <h3>Calendar Component</h3>

      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
        droppable={true}
        editable={true}
        initialView="timeGridDay"
        themeSystem="bootstrap" />
    </div>
  )
};

export default Calendar;