const express = require("express");
const path = require("path");
const app = express();
let todos = [
  {
    id: 1,
    text: "吃饭",
    completed: false,
  },
  {
    id: 2,
    text: "睡觉",
    completed: false,
  },
  {
    id: 3,
    text: "喝水",
    completed: false,
  },
];
app.get("/todos", function (req, res) {
  res.json(todos);
});
app.get("/toggle", function (req, res) {
  let ids = req.query.ids;
  ids = ids.split(",").map((item) => parseInt(item));
  todos = todos.map(function (todo) {
    if (ids.includes(todo.id)) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  res.json({ code: 0 });
});
app.use(express.static(__dirname));
app.listen(3000, () => {
  console.log("app listening at http://localhost:3000");
});
