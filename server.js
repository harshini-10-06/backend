
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const courseRoutes = require("./routes/courses");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected"));

app.use("/courses", courseRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => res.send("Mini LMS Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
