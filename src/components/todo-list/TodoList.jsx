import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";
import "./todoList.css";

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(item => (
    <li className="list-group-item" key={item.id}>
      <TodoListItem
        label={item.label}
        important={item.important}
        onDeleted={() => onDeleted(item.id)}
      />
    </li>
  ));

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
