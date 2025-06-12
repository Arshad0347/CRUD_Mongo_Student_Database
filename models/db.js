const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL
    );
    console.log(`MongoDB Connected Successfully... ${connectDB}` );
  } catch (err) {
    console.error('Connection error occured:', err.message);

  }
};

module.exports = connectDB;