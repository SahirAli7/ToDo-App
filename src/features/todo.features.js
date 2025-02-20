import axios from "axios";

const API = "http://localhost:3330/todos";

const addTodo = async (todo) => {
  try {
    return await axios.post(API, todo);
  } catch (error) {
    console.error(error);
  }
};

export { addTodo };
