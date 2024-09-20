import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../features/todo.features";
import { updateTodo } from "../server/server";

function ViewTodo({ todoId }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    category: "",
    createdAt: "",
    completedDate: "",
    status: "",
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    if (todos.length > 0) {
      const foundTodo = todos.find((element) => element.id === todoId);
      if (foundTodo) {
        setTodo(foundTodo);
      }
    }
  }, [todos, todoId]);

  async function handleTaskComplate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    updateTodo(todo.id, { ...todo, completedDate: formattedDate });
    setTodo((prevTodo) => ({
        ...prevTodo,
        completedDate: formattedDate,
      }));
    document.getElementById('closebtn').click()
  }

  return (
    <div>
      <div
        className="modal fade"
        id="viewTodoModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {todo.title}
              </h5>
            </div>
            <div className="modal-body">
              <p>{todo.description}</p>
              <p>
                {" "}
                <b>Created At : </b>
                {todo.createdAt}
              </p>
              <p>
                {" "}
                <b>Due Date : </b>
                {todo.dueDate}
              </p>
              <p className="text-capitalize">
                {" "}
                <b>Priority : </b>
                {todo.priority}
              </p>
              <p className="text-capitalize">
                {" "}
                <b>Category : </b>
                {todo.category}
              </p>
              <p className="text-capitalize">
                {" "}
                <b>Completed Date : </b> {todo.completedDate}
              </p>
            </div>
            <div className="modal-footer">
              <button
                id="closebtn"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {todo.completedDate === "" && (
                <button
                  className="btn btn-outline-success"
                  onClick={handleTaskComplate}
                >
                  Task Complate
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTodo;
