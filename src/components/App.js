import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  const [running, setRunning] = useState(time);

  const liveTime = () => {
    time = new Date().toLocaleTimeString();
    setRunning(time);
  };
  setInterval(liveTime, 1000);

  return (
    <div id="main">
      <div className="date-time">{date + ", " + running}</div>
    </div>
  );
};

export default App;
