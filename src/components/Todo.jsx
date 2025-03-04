import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import ViewTodo from "./ViewTodo";
import { getTodo, deleteData } from "../server/server";

function Todo() {
  const [todoId, setTodoId] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [click, setClick] = useState(false);
  const [xClick, setXClick] = useState(false);

  const fetchData = async () => {
    try {
      const res = await getTodo();
      setTodoData(res);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleDelete(e, id) {
    e.preventDefault();
    try {
      await deleteData(id);
      setXClick(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    setClick(false);
    setXClick(false);
  }, [click, xClick]);

  return (
    <>
      <div className="container-fluid">
        <div className="row box-group">
          {Array.isArray(todoData) &&
            todoData.map((todo) => (
              <div
                className="col-md-2 box pt-2 position-relative bg-dark text-light m-3 rounded-4"
                key={todo.id}
              >
                {/* Clickable area that opens the modal */}
                <div
                  onClick={() => setTodoId(todo.id)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <h3 className="text-center">{todo.title}</h3>
                  <hr />
                  <p className="todo-description">
                    {todo.description.split(" ").length < 20
                      ? todo.description
                      : todo.description.split(" ").slice(0, 20).join(" ") +
                        "..."}
                  </p>

                  <p className="position-absolute bottom-0 end-0 pe-3">
                    <span
                      className={`priority-label ${todo.priority}-priority`}
                    >
                      {todo.priority === "low"
                        ? "🟢"
                        : todo.priority === "medium"
                        ? "🟡"
                        : "🔴"}
                    </span>
                  </p>
                </div>
                <button
                  className="btn btn-danger position-absolute top-0 end-0 m-2"
                  onClick={(e) => handleDelete(e, todo.id)}
                >
                  X
                </button>
              </div>
            ))}
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary mt-5 ms-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add Todo
      </button>
      <AddTodo setClick={setClick} />
      <ViewTodo todoId={todoId} />
    </>
  );
}

export default Todo;
