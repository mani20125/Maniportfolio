const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const contactRoutes = require("./routes/contactRoutes");
console.log(process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/Contact", contactRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});