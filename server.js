const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://username:password@cluster.mongodb.net/minilms"
).then(() => console.log("DB Connected"));

app.get("/", (req, res) => {
  res.send("Mini LMS Backend Running");
});

app.listen(5000, () => console.log("Server started on port 5000"));
