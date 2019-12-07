import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);
  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="activeTask">
        <h3>ToDo List</h3>
        {activeTasks.length > 0 ? activeTasks : "nothinig to do"}
      </div>
      <hr />
      <div className="doneTask">
        <h4>
          Done task <em>({doneTasks.length})</em>
        </h4>
        {done.length > 5 && <span>Displayed 5 last tasks:</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
