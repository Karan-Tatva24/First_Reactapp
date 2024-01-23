import React, { useState } from "react";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState(1);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: inputValue, id: id }]);
    setId((prevId) => prevId + 1);
    setInputValue("");
  };

  const deleteTodo = (e) => {
    const todoId = parseInt(e.target.id, 10);
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>Add User</button>
      </form>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id} </td>
              <td>{todo.name}</td>
              <td>
                <button onClick={deleteTodo} id={todo.id}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoApp;
