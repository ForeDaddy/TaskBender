import React from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

const Todos = () => {

  return (
<div id='external-events'>
  <p>
    <strong>Draggable Events</strong>
  </p>

  <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
    <div class='fc-event-main' duration="01:00" title="Task Item 1">Task Item 1</div>
  </div>
  <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
    <div class='fc-event-main' duration="02:00" title="Task Item 2">Task Item 2</div>
  </div>
  <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
    <div class='fc-event-main' duration="00:20" title="Task Item 3">Task Item 3</div>
  </div>
  <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
    <div class='fc-event-main' duration="00:20" title="Task Item 4">Task Item 4</div>
  </div>
  <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
    <div class='fc-event-main' duration="00:20" title="Task Item 5">Task Item 5</div>
  </div>
  </div>
  )
};

export default Todos;