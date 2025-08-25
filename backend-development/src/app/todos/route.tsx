import { readFile, writeFile } from "node:fs/promises";
// import todos from "../../../todos.json";

export async function GET() {
//   console.log("Running Get route handler");

  const todoJSONString = await readFile("./todos.json", "utf-8");
  const todos = JSON.parse(todoJSONString);

  return Response.json(todos);

  //   return new Response(JSON.stringify({ todos }), {
  //     headers: { "Content-Type": "application/json" },
  //     status: 200,
  //     statusText: "GET Todos Data",
  //   });
}

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false,
  };

  todos.push(newTodo);
  await writeFile("todos.json", JSON.stringify(todos, null, 2));

  return Response.json(newTodo);
}
