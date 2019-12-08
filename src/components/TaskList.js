import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  /* first way*/
  // done.sort((a, b) => {
  //   return b.endDate - a.endDate;
  // });

  /* second way*/
  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.endDate > b.endDate) {
        return -1;
      }
      if (a.endDate < b.endDate) {
        return 1;
      }
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

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
        <h3>To do tasks</h3>
        {activeTasks.length > 0 ? activeTasks : "- nothinig to do -"}
      </div>
      <hr />
      <div className="doneTask">
        <h4>
          Completed tasks <em>({doneTasks.length})</em>
        </h4>
        {done.length > 5 && <span>check last 5 tasks:</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
