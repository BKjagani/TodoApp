import React, { useEffect, useState } from "react";
import "../static/css/todo.css";
import AddTodo from "./AddTodo";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../features/todo.features";
import ViewTodo from "./ViewTodo";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const refreshTodos = () => {
    dispatch(fetchTodos());
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row box-group">
          {todos.length > 0 &&
            todos.map((todo) => (
              <div
                onClick={() => setTodoId(todo.id)}
                data-bs-toggle="modal"
                data-bs-target="#viewTodoModal"
                className={`col-md-2 box pt-2 position-relative ${todo.priority}-bg`}
                key={todo.id}
              >
                <div className="position-absolute translate-middle badge-custom">
                  {todo.category}
                </div>
                <h3 className="text-center">{todo.title}</h3>
                <hr />
                <p className="todo-description">
                  {todo.description.split(" ").length < 20
                    ? todo.description
                    : todo.description.split(" ").slice(0, 20).join(" ") +
                      "..."}
                </p>

                <p className="position-absolute bottom-0 end-0 pe-3">
                  <span className={`priority-label ${todo.priority}-priority`}>
                    {todo.priority === "low"
                      ? "🟢"
                      : todo.priority === "medium"
                      ? "🟡"
                      : "🔴"}
                  </span>{" "}
                  Created At : {todo.createdAt}
                </p>
              </div>
            ))}

          <button
            type="button"
            className="btn btn col-md-2 box add-box"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <h2>Add Todo</h2>

            <i className="bi bi-patch-plus" id="add-todo-icon"></i>
          </button>
        </div>
      </div>
      <AddTodo refreshTodos={refreshTodos} />
      <ViewTodo todoId={todoId} />
    </>
  );
}

export default Todo;
