import React, { useState } from "react";

const Todo = () => {
  const [todos, setListTodo] = useState([
    { id: "todo1", title: "doing home work" },
    { id: "todo2", title: "making video" },
    { id: "todo3", title: "fixing bugs" },
  ]);
  const [title, setTitle] = useState("");

  const handleAddTodo = (todo) => {
    setListTodo([...todos, todo]);
  };
  return (
    <div className="todos">
      <p>A simple todo app with react</p>
      <div className="list-todo-container">
        <div className="add-todo">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              const todo = { id: Math.random().toString, title: title };
              handleAddTodo(todo);
            }}
          >
            Add
          </button>
        </div>
        <div className="list-todo-content">
          {todos.map((item, index) => {
            return (
              <div className="todo-child" key={index}>
                <span>
                  {" "}
                  {index + 1} - {item.title}
                </span>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
