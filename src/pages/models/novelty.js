import mongoose from "mongoose";
const { Schema } = mongoose;

const ordersSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Novelty =
  mongoose.models.Novelty || mongoose.model("Novelty", ordersSchema, "novelty");

export default Novelty;
