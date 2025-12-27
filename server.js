const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const courseRoutes = require("./routes/courses");   // Courses API
const authRoutes = require("./routes/auth");        // Auth API

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("YOUR_MONGODB_URL")
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

// Routes
app.use("/courses", courseRoutes);
app.use("/auth", authRoutes);

// Test root
app.get("/", (req, res) => {
    res.send("Mini LMS Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
