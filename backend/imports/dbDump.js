const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Product = require('../models/productModel'); 

// Provide your DB URL for one time import process in Products Collection
const DB_URL="mongodb+srv://sharjilansari234:GlWuaIuRqHRoGKzQ@cluster0.zzqk9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const importProducts = async () => {
  try {
    await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const filePath = path.join(__dirname, 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(jsonData);

    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log('Products imported successfully in the DB!');
    process.exit(0);
  } catch (error) {
    console.error('Error importing products:', error);
    process.exit(1); 
  }
};

// importProducts();

const imageUrls = [
    'https://m.media-amazon.com/images/I/61AXMjkohIL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/71EeBkydf9L._SX679_.jpg',
    'https://img.etimg.com/photo/msid-98945513,imgsize-249226/SamsungGalaxyA23.jpg',
    'https://www.zdnet.com/a/img/resize/c2253cf964fa71f21635742db0aa16a65527dd4e/2024/07/08/dace7360-64a6-41c1-880a-3f6621879894/dsc01178.jpg?auto=webp&fit=crop&height=900&width=1200',
    'https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-plus-492657-sm-s926blbcins-thumb-539573095?$344_344_PNG$'
  ];
  
  const getRandomImageUrl = () => {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
  };
  
  const updateProductImages = async () => {
    try {
       await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
       });

      const products = await Product.find();
  
      for (const product of products) {
        product.image_url = getRandomImageUrl();
        await product.save();
      }
  
      console.log('Product images updated successfully!');
      process.exit(0); 
    } catch (error) {
      console.error('Error updating product images:', error);
      process.exit(1); 
    }
  };
  
  updateProductImages();