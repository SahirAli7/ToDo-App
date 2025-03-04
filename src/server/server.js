import axios from "axios";

const API = "http://localhost:3330/todos";

const addTodo = async (todo) => {
  try {
    await axios.post(API, todo);
  } catch (error) {
    console.error(error);
  }
};

async function getTodo() {
  try {
    const res = await axios.get(API);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteData(id) {
  try {
    await axios.delete(`${API}/${id}`);
  } catch (error) {
    console.error(error);
  }
}

export { addTodo, getTodo, deleteData };
