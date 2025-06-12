const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://arshadeqbal:1234567890@cluster1.vuy03t3.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster1',
    );
    console.log(`MongoDB Connected Successfully... ${connectDB}` );
  } catch (err) {
    console.error('Connection error occured:', err.message);

  }
};

module.exports = connectDB;