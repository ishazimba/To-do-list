import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("https://mytodolist-96gk.onrender.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/"; // so once the response has been sent, its going to refresh and show the changes
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">My Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          placeholder="Enter new list here"
          onChange={(e) => setDescription(e.target.value)}
          style={{ textAlign: "center" }}
        />

        <button className="btn btn-success col-2" style={{ height: "50px" }}>
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
