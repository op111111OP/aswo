import mongoose from "mongoose";
const { Schema } = mongoose;
const ordersSchema = new Schema({
  img: String,
  price: Number,
  brand: String,
  country: String,
  name: String,
});

const Novelty =
  mongoose.models.Novelty || mongoose.model("Novelty", ordersSchema, "novelty");

export default Novelty;
