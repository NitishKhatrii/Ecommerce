import { useState } from "react";
import './TodoList.css';

function TodoList() {
  var [todo, settodo] = useState([]);
  var [newtodo, setnewtodo] = useState("");

  function HandlerBtn() {
    settodo([...todo, newtodo]);
    setnewtodo("");
  }

  function HandlerRemove(index) {
    var newarr = todo.filter((item, i) => i !== index);
    settodo(newarr);
  }

  function removeAll() {
    settodo([]);
  }

  return (
    <div className="todo-container">
      <h1 className="text-center">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newtodo}
          onChange={(e) => setnewtodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={HandlerBtn}>Add Task</button>
      </div>
      {todo.map((t, index) => (
        <div className="task-container" key={index}>
          <span>{t}</span>
          <button onClick={() => HandlerRemove(index)}>Remove</button>
        </div>
      ))}
      {todo.length >= 1 && (
        <button onClick={removeAll} className="remove-all-btn">
          Remove All
        </button>
      )}
    </div>
  );
}

export default TodoList;
