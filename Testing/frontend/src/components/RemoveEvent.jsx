import React, { useState } from "react";
import axios from "axios";

const RemoveEvent = () => {
  const [date, setdate] = useState({
    title: "",
  });
  const handleChange = (e) => {
    setdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/events/rev", date);
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.location.reload();
    }
  };
  return (
    <div className="add-event-wrapper">
      <form action="" className="form-in-adding" onSubmit={handleUpload}>
        <input type="text" onChange={handleChange} name="title" id='date-del'/>
        {console.log(date)}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default RemoveEvent;
