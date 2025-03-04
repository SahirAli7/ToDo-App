import React, { useState } from "react";
import { addTodo } from "../server/server";
import { toast } from "react-toastify";

function AddTodo({ setClick }) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const { title, description, priority } = todo;

  function handleChange(e) {
    setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
 
  async function handleSubmit(e) {
    e.preventDefault();
    toast.dismiss();
    setClick(true)
    toast.success("Todo added successfully");
    await addTodo(todo);
  }

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Todo
              </h1>
            </div>
            <div className="modal-body">
              {/* Modal body start */}
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    aria-label="Title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    aria-label="Description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                  />
                </div>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                  name="priority"
                  value={priority}
                  onChange={handleChange}
                >
                  <option>--Priority--</option>
                  <option value="low">Low 🟢</option>
                  <option value="medium">Medium 🟡</option>
                  <option value="high">High 🔴</option>
                </select>
              </form>
              {/* Modal body end */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
