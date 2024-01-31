import mongoose from "mongoose";
const { Schema } = mongoose;
const ordersSchema = new Schema({});

const Orders =
  mongoose.models.Orders || mongoose.model("Orders", ordersSchema, "categori");

export default Orders;
