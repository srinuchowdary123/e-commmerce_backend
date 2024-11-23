const express = require("express");
const Product = require("../models/products-model");
const router = express.Router();

// Add a new product
router.post("/", async (req, res) => {
  try {
    const { name, price, category, imageUrl } = req.body;
    const newProduct = new Product({ name, price, category, imageUrl });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get products by category
router.get("/category/:id", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
