import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://admin:admin@foodcluster0.pi3v6.mongodb.net/food-delivery-app?retryWrites=true&w=majority&appName=foodCluster0"
    )
    .then(() => console.log("DB Connected"));
};
