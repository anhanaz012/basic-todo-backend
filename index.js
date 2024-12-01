import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
let todos = [];
let todoId = 0;
//Add New todo
app.post("/add-todo", (req, res) => {
  const { title, description } = req.body;
  const todo = {
    id: todoId++,
    title,
    description,
  };
  todos.push(todo);
  res.status(200).send("Todo added successfully");
});
//Getting list of all todos
app.get("/get-todos", (req, res) => {
  res.status(201).send(todos);
});

//Get a todo based on its ID
app.get("/get-todo/:id", (req, res) => {
  const requiredTodo = todos.filter((todo) => todo.id == req.params.id);
  if (requiredTodo.length === 0) {
    res.send("No todo is added for this search");
  } else {
    res.send(requiredTodo);
  }
});

// Update a todo based on ID
app.put("/update-todo/:id", (req, res) => {
  const prevTodo = todos.find((todo) => todo.id == req.params.id);
  return res.send(prevTodo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});