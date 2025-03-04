import React, { useEffect, useState } from "react";
import { getTodo } from "../server/server";

function ViewTodo({ todoId }) {
  const [todos, setTodos] = useState([]);
  const [todoData, setTodoData] = useState({});

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await getTodo();
        setTodos(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      const obj = todos.find((ele) => ele.id === todoId);
      if (obj) {
        setTodoData(obj);
      }
    }
  }, [todos, todoId]);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {todoData.title || "No Title"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Description :{" "}
                {todoData.description || "No description available"}
              </p>
              <p>Priority : {todoData.priority || "No priority available"}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewTodo;
