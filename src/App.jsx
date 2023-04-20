import { useState } from 'react'
import * as bootstrap from 'bootstrap';
import './App.css';
import Calendar from './Calendar.jsx';
import Todos from './Todos.jsx';

function App() {

  return (
    <div className="App">
      <h1>Task Bender</h1>
      <h2>Put your todo's on your calendar today</h2>
      <Todos />
      <Calendar />
    </div>
  )
}

export default App
