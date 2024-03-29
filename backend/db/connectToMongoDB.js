import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("succesfully connected with mongoDB");
  } catch (error) {
    console.log("Error while connection to mongoDB:", error.message);
  }
};

export default connectToMongoDB;
