const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/quotes", (req, res) => {
  res.json([
    { id: 1, text: "Quote 1", author: "Author 1" },
    { id: 2, text: "Quote 2", author: "Author 2" },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
