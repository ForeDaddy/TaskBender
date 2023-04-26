import { useState } from "react";
import * as bootstrap from "bootstrap";
import "./App.css";
import Calendar from "./Calendar.jsx";
import Todos from "./Todos.jsx";

function App() {
  return (
    <div className="App">
      <div className="topBar Title">Task Bender</div>
      <div className="topBar subtitle">
        Put your todo's on your calendar today
      </div>

      <div className="Layout">
        <div className="mytasks">
          <Todos />
        </div>
        <div className="mycal">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
