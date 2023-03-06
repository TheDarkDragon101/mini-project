import Calendar from "./components/Calendar";
import AddingEvent from "./components/AddingEvent";
import RemoveEvent from "./components/RemoveEvent";
import UpdateEvent from "./components/UpdateEvent";
import { useState } from "react";
import "./styles/global.css";
function App() {
  const [EventActive, setEventActive] = useState(false);
  return (
    <div className="app-wrapper">
      <Calendar />
      <div className="nav">
        <div className="nav-btn">
          <h1>Add event</h1>
          <AddingEvent />
        </div>
        <div className="remove-sec">
          <h1>Remove event</h1>
          <RemoveEvent />
        </div>
        <div className="update-sec">
          <h1>Update event</h1>
          <UpdateEvent/>
        </div>
      </div>
    </div>
  );
}

export default App;
