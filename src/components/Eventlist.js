import React from "react";

export default function Eventlist({ events, handleClickDelete }) {
  return (
    <>
      <div className="events">
        {events.map((event) => {
          return (
            <React.Fragment key={event.id}>
              <p>---------------------------------------------------</p>
              <h4>{event.id}</h4>
              <h3>{event.title}</h3>
              <h4>{event.date}</h4>
              <button onClick={() => handleClickDelete(event.id)}>
                Delete
              </button>
            </React.Fragment>
          );
        })}
      </div>
      )
    </>
  );
}
