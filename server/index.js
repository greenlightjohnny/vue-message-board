const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

////middleware
app.use(morgan("tiny"));
app.use(cors());
//app.use(bodyParser())
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hiii");
  res.json({
    message: "WOWWWW",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
