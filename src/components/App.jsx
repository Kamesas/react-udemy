import React from "react";
import AppHeader from "./app-header/AppHeader";
import SearchPanel from "./search-panel/SearchPanel";
import TodoList from "./todo-list/TodoList";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

export default App;
