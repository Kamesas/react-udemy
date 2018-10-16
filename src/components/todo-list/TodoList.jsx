import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";
import "./todoList.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(item => (
    <li className="list-group-item" key={item.id}>
      <TodoListItem
        label={item.label}
        important={item.important}
        done={item.done}
        onDeleted={() => onDeleted(item.id)}
        onToggleImportant={() => onToggleImportant(item.id)}
        onToggleDone={() => onToggleDone(item.id)}
      />
    </li>
  ));

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
