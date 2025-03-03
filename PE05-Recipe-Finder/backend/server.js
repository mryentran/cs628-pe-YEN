require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON body

app.use("/api/recipes", recipeRoutes);
  
  
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
