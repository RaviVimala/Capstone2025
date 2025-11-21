import mongoose from "mongoose";

export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://fullstackb21:Ravi12345@cluster0.dfpby4s.mongodb.net/food-deliveryappName=Cluster0').then(() => console.log("Database Connected"));
}