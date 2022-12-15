import Express from "express";

const PORT = 3000;
const app = Express();
const cors = require("cors");

app.use(
  cors({
    //allow all origins
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
