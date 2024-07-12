const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const Users = require("./models/test.model.js");
console.log(Users);
mongoose
  .connect(
    "mongodb+srv://himxa:VWpmYZ73du9pZ5kc@cluster0.wtzsrez.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





app.get("/api/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//getting perticular element

app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // getting peticular element by id from db
    const product = await Product.findById(id);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// updating doc

app.put("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // getting peticular element by id from db
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).send("NO Item Found");
    }

    const updatedProduct = await Product.findById(id);
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//deleting doc

app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // getting peticular element by id from db
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).send("NO Item Found");
    }

    res.status(201).json({ message: "deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log("listing to port 5000");
});
