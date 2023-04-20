import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import * as bootstrap from 'bootstrap';
import './App.css';
import Calendar from './Calendar.jsx';

function App() {

  return (
    <div className="App">
      <h1>Task Bender</h1>
      <h2>Put your todo's on your calendar today</h2>
      <Calendar />
    </div>
  )
}

export default App
