import React from "react";
import AppHeader from "./app-header/AppHeader";
import SearchPanel from "./search-panel/SearchPanel";
import TodoList from "./todo-list/TodoList";
import ItemStatusFilter from "./item-status-filter/ItemStatusFilter";

import "./app.css";

const App = () => {
  const todoData = [
    { id: 1, label: "Drink Coffee", important: false, done: false },
    { id: 2, label: "Learn React", important: true, done: false },
    { id: 3, label: "Make Awesome App", important: false, done: false }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} onDeleted={id => console.log("del", id)} />
    </div>
  );
};

export default App;
