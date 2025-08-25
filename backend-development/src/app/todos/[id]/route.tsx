import { error } from "console";
import todos from "../../../../todos.json";
import { writeFile } from "fs/promises";

export async function GET(_, { params }) {
  const { id } = await params;
  // console.log(id)
  const todo = todos.find((todo) => id === todo.id.toString());

  if (!todo) {
    return Response.json({ error: "Todo Not Found" }, { status: 404 });
  }
  return Response.json({ todo });
}

export async function PUT(request, { params }) {
  const editTodoData = await request.json();
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => id === todo.id);

  const todo = todos[todoIndex];

  const editedTodo = { ...todo, ...editTodoData };
  todos[todoIndex] = editedTodo;

  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return Response.json(editedTodo);
}

export async function DELETE(_, { params }) {
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => id === todo.id);

  todos.splice(todoIndex, 1);
  await writeFile("todos.json", JSON.stringify(todos, null, 2));

  return new Response(null, { status: 204 });
}
