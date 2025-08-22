import React from "react";

async function Todoc() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const todos = await response.json();
  console.log(todos);
  return (
    <div className="todos-container">
      {todos.map(({ id, title, completed }) => (
        <div key={id} className="todo-items">
          <input type="checkbox" checked={completed} readOnly />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default Todoc;
