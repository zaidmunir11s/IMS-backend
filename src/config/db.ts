import mongoose, { ConnectOptions } from "mongoose";

const dbURI: string = "mongodb://localhost:27017/ims";

const connectDB = async (): Promise<void> => {
  try {
    const options: ConnectOptions = {}; // You can add options here if needed, such as useNewUrlParser, etc.
    await mongoose.connect(dbURI, options);
    console.log("MongoDB connected successfully");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("MongoDB connection error:", error.message);
    } else {
      console.error("MongoDB connection error: Unknown error");
    }
    process.exit(1);
  }
};

export default connectDB;
