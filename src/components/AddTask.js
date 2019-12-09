import React, { Component } from "react";
import "./AddTask.scss";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          className="inputText"
          type="text"
          placeholder="write task..."
          value={this.state.text}
          onChange={this.handleText}
        />
        <label htmlFor="important" className="container">
          Important
          <input
            className="checkbox"
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleCheckbox}
          />
          <span className="checkmark"></span>
        </label>
        <input
          className="inputText"
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTask;
