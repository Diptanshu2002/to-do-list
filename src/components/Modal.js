import "./Modal.style.css";
import NewEventForm from "./NewEventForm";

export default function Modal(props) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <NewEventForm
          addEvents={props.addEvents}
          setShowModel={props.setShowModel}
        />
        <button onClick={() => props.setShowModel(false)}>Close</button>
      </div>
    </div>
  );
}
