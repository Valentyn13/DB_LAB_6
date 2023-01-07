const express = require("express");
const db = require("./conection");

const PORT = 4308;
const app = express();
app.use(express.json());

app.use("/api", require("./routes"));

app.get("/", (req, res) => {
  res.send("OK");
});

db.connect(() =>
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
);