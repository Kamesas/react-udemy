import React, { Component } from "react";
import AppHeader from "./app-header/AppHeader";
import SearchPanel from "./search-panel/SearchPanel";
import AddTaskForm from "./add-task-form/AddTaskForm";
import TodoList from "./todo-list/TodoList";
import ItemStatusFilter from "./item-status-filter/ItemStatusFilter";

import "./app.css";

class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { id: 1, label: "Drink Coffee", important: false, done: true },
      { id: 2, label: "Learn React", important: true, done: false },
      { id: 3, label: "Make Awesome App", important: false, done: false }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArr };
    });
  };

  newTask = text => {
    const newTaskItem = {
      id: this.maxId++,
      label: text,
      important: false,
      done: false
    };
    this.setState(({ todoData }) => {
      const newArr = [newTaskItem, ...todoData];
      return {
        todoData: newArr
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <div>
          <AddTaskForm newTask={this.newTask} />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}

export default App;
