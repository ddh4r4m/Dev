const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//change this to make server on your laptop
// mongoose.connect('mongodb://localhost/users',{ useNewUrlParser: true });
//"mongoURI" or change this
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    //Exit procees with failure
    process.exit(1);
  }
};

module.exports = connectDB;
