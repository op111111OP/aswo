// import Orderg from "../models/orderg";
import mongoose from "mongoose";
import { Schema } from "mongoose";

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const productSchema = new Schema({
  price: { type: Number },
  name: { type: String },
  categori: { type: String },
  article: { type: String },
  brand: { type: String },
  country: { type: String },
  id: { type: String },
  img: { type: String },
});

const ordersSchema = new Schema({
  city: {
    type: String,
  },
  email: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  message: {
    type: String,
  },
  phone: {
    type: String,
  },
  street: {
    type: String,
  },
  card: {
    type: String,
  },
  courier: {
    type: String,
  },
  day: {
    type: String,
  },

  someField: {
    type: Number,
  },
  numB1: {
    type: [Number],
  },
  numB: {
    type: [Number],
  },
  userData: [productSchema],
  department: {
    type: String,
  },
});
const Orderg =
  mongoose.models.Orderg || mongoose.model("Orderg", ordersSchema, "order");
export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const {
        city,
        email,
        first_name,
        last_name,
        message,
        phone,
        someField,
        street,
        userData,
        department,
        courier,
        card,
        day,
        numB1,
        numB,
      } = req.body;

      const newOrders = new Orderg({
        city,
        email,
        first_name,
        last_name,
        message,
        phone,
        someField,
        street,
        userData,
        department,
        courier,
        card,
        day,
        numB1,
        numB,
      });
      await newOrders.save();
      console.log(newOrders, 11);

      return res
        .status(201)
        .json({ message: "Товар успешно добавлен", item: newOrders });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Что-то пошло не так" });
    }
  } else {
    res.status(405).json({ error: "Метод не поддерживается" });
  }
};
