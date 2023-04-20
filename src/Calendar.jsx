import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = () => {
  return (
    <div className="calendar">
      <h3>Calendar Component</h3>
      <FullCalendar plugins={[ dayGridPlugin, timeGridPlugin ]} initialView="timeGridDay" />
    </div>
  )
};

export default Calendar;