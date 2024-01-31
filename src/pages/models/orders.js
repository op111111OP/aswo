import mongoose from "mongoose";
const { Schema } = mongoose;
const ordersSchema = new Schema({
  orderNumber: String,
});

const Orders =
  mongoose.models.Orders || mongoose.model("Orders", ordersSchema, "categori");

export default Orders;
