import React, { useState } from "react";
import { Table } from "react-bootstrap";

const Todo = () => {
  const [todos, setListTodo] = useState([
    { id: "todo1", title: "doing home work" },
    { id: "todo2", title: "making video" },
    { id: "todo3", title: "fixing bugs" },
  ]);
  const [title, setTitle] = useState("");
  const [titleAddButton, setTitleAddButton] = useState("add");
  const [index, setIndex] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const handleAddTodo = (todo) => {
    setListTodo([...todos, todo]);
    setTitle("");
  };

  const handleEditTodo = () => {
    const todosCopy = Object.assign(todos);
    todosCopy[index].title = title;
    setListTodo(todosCopy);
    setTitle("");
    setIsEdit(false);
  };

  const handleDeleteTodo = (indexDelete) => {
    console.log("check", indexDelete);
    const todosCopy = Object.assign(todos);
    setListTodo(todosCopy.filter((item, i) => i !== indexDelete));
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
              if (isEdit === true) {
                handleEditTodo();
              } else {
                const todo = {
                  id: "id" + new Date().getTime(),
                  title: title,
                };
                handleAddTodo(todo);
              }
            }}
          >
            {titleAddButton}
          </button>
        </div>
        <div className="list-todo-content">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <span>{item.title}</span>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setIndex(index);
                          const todo = todos[index];
                          setTitle(todo?.title);
                          setTitleAddButton("Edit");
                          setIsEdit(true);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleDeleteTodo(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Todo;
