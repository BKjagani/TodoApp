import React, { useState } from "react";
import "../static/css/todo.css";
import AddTodo from "./AddTodo";

function Todo() {
  return (
    <>
      <div className="container-fluid">
        <div className="row box-group">
          <div className="col-md-2 box"></div>
          <button
            type="button"
            className="btn btn-info btn col-md-2 box add-box"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <h2>Add Todo</h2>
            <i class="bi bi-patch-plus" id="add-todo-icon"></i>
          </button>
        </div>
      </div>
      <AddTodo />
    </>
  );
}

export default Todo;
