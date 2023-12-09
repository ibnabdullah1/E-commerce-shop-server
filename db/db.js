const mongoose = require("mongoose");
const connectDB = async () => {
  const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.rjnekog.mongodb.net/VegetablesShopBD?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDD database`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
