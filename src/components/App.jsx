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
    ],
    finded: "",
    filter: "all"
  };

  onFilterChange = filter => {
    this.setState({ filter: filter });
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(el => !el.done);
      case "done":
        return items.filter(el => el.done);

      default:
        return items;
    }
  }

  onSearchChange = e => {
    this.setState({ finded: e });
  };

  search(items, finded) {
    if (finded.length === 0) {
      return items;
    }

    return items.filter(el => {
      return el.label.toLowerCase().indexOf(finded.toLowerCase()) > -1;
    });
  }

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

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
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
    const countDone = this.state.todoData.filter(el => el.done).length;
    const countTask = this.state.todoData.filter(el => !el.done).length;

    const { todoData, finded, filter } = this.state;
    const visibleTasks = this.filter(this.search(todoData, finded), filter);

    return (
      <div className="todo-app">
        <AppHeader toDo={countTask} done={countDone} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <div>
          <AddTaskForm newTask={this.newTask} />
        </div>
        <TodoList
          todos={visibleTasks}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}

export default App;
