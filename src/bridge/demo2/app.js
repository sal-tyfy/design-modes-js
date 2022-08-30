const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/user/:id", function (req, res) {
  const id = req.params.id;
  res.json({
    id,
    name: `zy${id}`,
  });
});
app.listen(3000, () => {
  console.log("app listening at http://localhost:3000");
});
