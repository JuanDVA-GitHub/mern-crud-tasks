import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

mongoose.set("strictQuery", false);

async function connectDB() {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error({ error });
  }
}

connectDB();

mongoose.connection.on("connected", () => {
  console.log("Database is connected to", mongoose.connection.db.databaseName);
});
