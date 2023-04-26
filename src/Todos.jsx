import React from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

const Todos = () => {
  return (
    <div id="external-events">
      <p>
        <strong>Your Task List</strong>
      </p>

      <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
        <div
          class="fc-event-main"
          duration="02:00"
          title="Work A Ticket - Project TaskBender - (2hrs)"
        >
          Work A Ticket
        </div>
      </div>
      <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
        <div
          class="fc-event-main"
          duration="01:00"
          title="Email/Phone/Texts Batch Process - (1hr)"
        >
          Communication Batch
        </div>
      </div>
      <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
        <div
          class="fc-event-main"
          duration="00:20"
          title="Language Learning - (20mins)"
        >
          Study Pomodoro - Language
        </div>
      </div>
      <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
        <div
          class="fc-event-main"
          duration="00:20"
          title="Read A Book - (20mins)"
        >
          Reading Habit
        </div>
      </div>
      <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
        <div class="fc-event-main" duration="01:00" title="Workout - (1hr)">
          Gym Time
        </div>
      </div>
      <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
        <div
          class="fc-event-main"
          duration="00:10"
          title="Short Break - Stretch/Breathe/Compose - (10min)"
        >
          Short Break
        </div>
      </div>
      <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
        <div
          class="fc-event-main"
          duration="00:20"
          title="Long Break - Go Outside - (20min)"
        >
          Long Break
        </div>
      </div>
    </div>
  );
};

export default Todos;
