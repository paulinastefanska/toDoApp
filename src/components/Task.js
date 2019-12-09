import React from "react";
import "./Task.scss";

const Task = props => {
  const style = {
    color: "#ff7675"
  };
  const { text, date, id, active, important, endDate } = props.task;
  if (active) {
    return (
      <div className="taskActive">
        <p>
          <strong style={important ? style : null}>{text}</strong> (till{" "}
          <span>{date}) </span>
          <button className="done" onClick={() => props.change(id)}>
            Done
          </button>
          <button className="delete" onClick={() => props.delete(id)}>
            x
          </button>
        </p>
      </div>
    );
  } else {
    const time = new Date(endDate).toLocaleString();

    return (
      <div className="taskDone">
        <p>
          <strong>{text}</strong>
          <em> (till {date}) </em>
          <button className="delete" onClick={() => props.delete(id)}>
            x
          </button>
          <span className="taskComplete">
            task complete <span>{time} </span>
          </span>
        </p>
      </div>
    );
  }
};

export default Task;
