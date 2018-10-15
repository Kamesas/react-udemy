import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";
import "./todoList.css";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => (
    <li className="list-group-item" key={item.id}>
      <TodoListItem label={item.label} important={item.important} />
    </li>
  ));

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
