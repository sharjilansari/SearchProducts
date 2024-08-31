const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    console.log(MONGO_URI)
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
