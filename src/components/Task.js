import React from "react";

const Task = props => {
  const style = {
    color: "red"
  };
  const { text, date, id, active, important, endDate } = props.task;
  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - till{" "}
          <span>{date} </span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>x</button>
        </p>
      </div>
    );
  } else {
    const time = new Date(endDate).toLocaleString();

    return (
      <div>
        <p>
          <strong>{text}</strong>
          <em> (till {date}) </em>
          <br />- task complete <span>{time} </span>
          <button onClick={() => props.delete(id)}>x</button>
        </p>
      </div>
    );
  }
};

export default Task;
