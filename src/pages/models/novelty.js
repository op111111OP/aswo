import mongoose from "mongoose";
const { Schema } = mongoose;
const ordersSchema = new Schema({});

const Novelty =
  mongoose.models.Novelty || mongoose.model("Novelty", ordersSchema, "novelty");

export default Novelty;
