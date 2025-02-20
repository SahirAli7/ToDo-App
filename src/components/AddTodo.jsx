import React, { useState } from "react";
import { toast } from "react-toastify";
import { addTodo } from "../server/server";

function AddTodo() {
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
    if (title && description && category && dueDate && priority) {
      toast.success("Todo Added Successfully");
      const currentDate = (newDate = new Date());
      const formattedDate = currentDate.toISOString().slice(0, 10);
      addTodo({...todo, createdAt : formattedDate, completedDate : "",
    statud : ""})
    }
  }

  const { title, description, priority, dueDate, category } = todo;
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="staticBackdropLabel">
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
                    value={title}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                  ></textarea>
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
                      type="text"
                      className="form-control"
                      placeholder="Due Date"
                      aria-label="Title"
                      aria-describedby="basic-addon1"
                      min={new Date().toISOString().split("T")[0]}
                      name="dueDate"
                      value={dueDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </div>
            {/* model body end */}
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
