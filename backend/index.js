require("dotenv").config();
const express = require('express');
const cors = require("cors");
const connectDB = require("./db");
const Product = require("./models/productModel");
const app = express();
const port = 3000;

app.use(cors());
connectDB();
app.use(express.json());

app.get('/product', async (req, res) => {
    try {
        const { productName } = req.query;
        const query = productName ? { product_name: new RegExp(productName, 'i') } : {};
        const products = await Product.find(query);
        return res.json({ data: products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
