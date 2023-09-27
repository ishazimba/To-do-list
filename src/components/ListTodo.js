import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://mytodolist-96gk.onrender.com/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://mytodolist-96gk.onrender.com/todos"
      );
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []); // to ensure that we only make one request, [] is used here

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
