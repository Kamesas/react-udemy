import React, { Component } from "react";
import "./addTaskForm.css";

class AddTaskForm extends Component {
  state = {
    inpValue: ""
  };

  onChangeValue = e => {
    this.setState({ inpValue: e.target.value });
  };

  addTask = e => {
    e.preventDefault();
    this.setState({ inpValue: "" });
    if (this.state.inpValue) {
      this.props.newTask(this.state.inpValue);
    }
  };

  render() {
    return (
      <form className="add-task-form d-flex" onSubmit={this.addTask}>
        <input
          type="text"
          placeholder="add task"
          className="form-control search-input"
          value={this.state.inpValue}
          onChange={this.onChangeValue}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}

export default AddTaskForm;
