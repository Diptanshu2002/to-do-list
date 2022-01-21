import { useState } from "react/cjs/react.development";
import "./NewEventForm.style.css";

export default function NewEventForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDate(e) {
    setDate(e.target.value);
  }

  function reset() {
    setTitle("");
    setDate("");
  }

  function formInputdetails(e) {
    e.preventDefault();
    const newEvent = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };
    props.addEvents(newEvent);
    reset();
    props.setShowModel(false);
    console.log(newEvent);
  }
  return (
    <form className="new-event-form" onSubmit={formInputdetails}>
      <label>
        <p>Event Title</p>
        <input type="text" onChange={handleChangeTitle} value={title} />
      </label>

      <label>
        <p>Event Date</p>
        <input type="date" onChange={handleChangeDate} value={date} />
      </label>

      <button onClick={reset}>reset</button>

      <button type="submit"> Submit </button>
    </form>
  );
}
