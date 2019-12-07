import React, { Component } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "clean house",
        date: "2019-12-20",
        important: true,
        active: true,
        endDate: null
      },
      {
        id: 1,
        text: "walk with dog",
        date: "2019-12-10",
        important: true,
        active: false,
        endDate: null
      },
      {
        id: 2,
        text: "cook dinner",
        date: "2019-12-22",
        important: false,
        active: true,
        endDate: null
      },
      {
        id: 3,
        text: "buy new shoes",
        date: "2019-12-30",
        important: false,
        active: true,
        endDate: null
      },
      {
        id: 4,
        text: "go to work",
        date: "2020-01-02",
        important: true,
        active: true,
        endDate: null
      }
    ]
  };

  deleteTask = id => {
    /* first way */
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // });

    /* second way */
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  statusTask = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.endDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="App">
        ToDo App
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.statusTask}
        />
      </div>
    );
  }
}

export default App;
