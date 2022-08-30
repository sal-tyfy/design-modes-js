const express = require("express");
const path = require("path");
const app = express();

app.get("/loading.gif", function (req, res) {
  res.sendFile(path.resolve("images/loading.gif"));
});
app.get("/images/:name", function (req, res) {
  setTimeout(() => {
    res.sendFile(path.join(__dirname, req.path));
  }, 2000);
});
app.use(express.static(__dirname));
app.listen(3000, () => {
  console.log("app listening at http://localhost:3000");
});
