import React from "react";
import "./todoListItem.css";

class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false
  };

  onDoneTask = () => {
    this.setState(state => {
      return { done: !state.done };
    });
  };

  onImportantTask = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onDoneTask}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportantTask}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

export default TodoListItem;
