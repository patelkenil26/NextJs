// data fetching in server component with loading 

export default async function page() {

  const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=5000")
  const data = await slowResponse.json()
  console.log(data)

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const todos = await response.json();
  console.log(todos);
  return (
    <>
      <h1>TODOS</h1>
      <div className="todos-container">
        {
          todos.map(({id,title,completed})=>(
            <div key={id} className="todo-items">
              <input type="checkbox"  checked={completed} readOnly/>
              <p>{title}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

 
