require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./db");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(bodyParser.json());


connectToDatabase();
// Routes
app.use("/products", productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
