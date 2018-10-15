import React, { Component } from "react";
import AppHeader from "./app-header/AppHeader";
import SearchPanel from "./search-panel/SearchPanel";
import TodoList from "./todo-list/TodoList";
import ItemStatusFilter from "./item-status-filter/ItemStatusFilter";

import "./app.css";

class App extends Component {
  state = {
    todoData: [
      { id: 1, label: "Drink Coffee", important: false, done: false },
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

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}

export default App;
