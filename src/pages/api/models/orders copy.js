import mongoose from "mongoose";
const { Schema } = mongoose;
const ordersSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  someField: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  userData: {
    priceProduct: {
      type: Number,
      required: true,
    },
    nameProduct: {
      type: String,
      required: true,
    },
    arrayProduct: {
      type: Number,
      required: true,
    },
  },
});

const Orders =
  mongoose.models.Orders ||
  mongoose.model("Orders", ordersSchema, "listOrders");

export default Orders;
