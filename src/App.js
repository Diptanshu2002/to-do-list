import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Eventlist from "./components/Eventlist";

function App() {
  //useState

  const [showEvents, setShowEvents] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [events, setEvents] = useState([]);

  //functions

  function addEvents(event) {
    setEvents((prevState) => {
      return [...prevState, event];
    });
  }

  //handle-click functions

  function handleClickDelete(id) {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(events);
  }

  return (
    <div className="App">
      <Title title="TO DO LIST" subTitle="YOUR TO DO LIST " />

      {showEvents && (
        <button
          onClick={() => {
            setShowEvents(false);
          }}
        >
          Hide Events
        </button>
      )}

      {!showEvents && (
        <button
          onClick={() => {
            setShowEvents(true);
          }}
        >
          Show Events
        </button>
      )}

      {showEvents && (
        <Eventlist handleClickDelete={handleClickDelete} events={events} />
      )}
      <button onClick={() => setShowModel(true)}>Add New Event</button>

      {showModel && <Modal setShowModel={setShowModel} addEvents={addEvents} />}
    </div>
  );
}

export default App;
