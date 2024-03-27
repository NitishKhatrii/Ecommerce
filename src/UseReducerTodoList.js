import React, { useReducer, useState } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

function UseReducerTodoList() {
  const [cart, dispatch] = useReducer(reducer, []);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
  }

  function removeTodo(id) {
    dispatch({ type: "REMOVE_TODO", payload: id });
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {cart.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UseReducerTodoList
;
