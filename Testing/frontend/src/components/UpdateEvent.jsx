import React, { useState } from "react";
import axios from "axios";

const UpdateEvent = () => {
  const [date, setdate] = useState({
    title: "",
    date: null,
  });
  const handleChange = (e) => {
    setdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/events/update", date);
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.location.reload();
    }
  };
  return (
    <div className="add-event-wrapper">
      <form action="" className="form-in-adding" onSubmit={handleUpload}>
        <input type="date" onChange={handleChange} name="date" id='date-Update' />
        <input type="text" onChange={handleChange} name="title" id='event-Update'/>
        {console.log(date)}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UpdateEvent;
