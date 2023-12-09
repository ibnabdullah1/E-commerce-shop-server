const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db/db");
const errorHandler = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.use(errorHandler);

// Start the server
app.get("/", (req, res) => {
  res.send("MongoDB connected  is running");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
