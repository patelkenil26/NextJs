// data fetching in server component with loading

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos?_limit=10",
  "https://procodrr.vercel.app/?sleep=2000",
  "https://procodrr.vercel.app/?sleep=3000",
];

export default async function page() {
  const [todos, data1s, data2s] = await Promise.all(
    urls.map((url) => fetchData(url))
  );

  return (
    <>
      <h1>TODOS</h1>
      <div className="todos-container">
        {todos.map(({ id, title, completed }) => (
          <div key={id} className="todo-items">
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
      </div>{" "}
      <div>{JSON.stringify(data1s)}</div>
      <div>{JSON.stringify(data2s)}</div>
    </>
  );
}
