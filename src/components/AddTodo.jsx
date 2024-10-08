import React, { useState } from "react";
import { toast } from "react-toastify";
import { addTodo } from "../server/server";

function AddTodo({refreshTodos}) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    category: "",
  });

  function handleChange(e) {
    setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    toast.dismiss();
    if (
      todo.title &&
      todo.description &&
      todo.category &&
      todo.dueDate &&
      todo.priority
    ) {
      toast.success("Todo Added Successfully");
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 10);
      addTodo({...todo,createdAt : formattedDate, completedDate : "", status : ""})
      refreshTodos();
      document.getElementById("closeModalButton").click();
      setTodo({
        title: "",
        description: "",
        priority: "",
        dueDate: "",
        category: "",
      });
    } else {
      toast.error("Please full fill the details");
    }
  }

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        tabIndex="-1"
        data-bs-keyboard="false"
        data-bs-backdrop="static"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Add Todo
              </h5>
            </div>
            {/* model body start */}
            <div className="modal-body">
              <form action="">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    aria-label="Title"
                    aria-describedby="basic-addon1"
                    name="title"
                    value={todo.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Description"
                    name="description"
                    value={todo.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                  name="priority"
                  value={todo.priority}
                  onChange={handleChange}
                >
                  <option>--Priority--</option>
                  <option value="low">Low 🟢</option>
                  <option value="medium">Medium 🟡</option>
                  <option value="high">High 🔴</option>
                </select>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                  name="category"
                  value={todo.category}
                  onChange={handleChange}
                >
                  <option>--Category--</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                </select>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Due Date
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Due Date"
                    aria-label="Title"
                    aria-describedby="basic-addon1"
                    min={new Date().toISOString().split("T")[0]}
                    name="dueDate"
                    value={todo.dueDate}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            {/* model body end */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                id="closeModalButton"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
