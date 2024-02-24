// import Orderg from "../models/orderg";
import mongoose from "mongoose";
import { Schema } from "mongoose";

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ordersSchema1 = new Schema({
  name: {
    type: String,
  },
  article: {
    type: String,
  },
  img: {
    type: String,
  },
  novel: {
    type: Boolean,
  },
  price: {
    type: Number,
  },
  brand: {
    type: String,
  },
  country: {
    type: String,
  },
  description: {
    type: String,
  },
});
const Orderg1 =
  mongoose.models.Orderg1 ||
  mongoose.model("Orderg1", ordersSchema1, "products");

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, article, img, price, brand, country, description, novel } =
        req.body;

      const newOrders14 = new Orderg1({
        name,
        article,
        img,
        price,
        brand,
        country,
        description,
        novel,
      });
      await newOrders14.save();
      console.log(newOrders14, 11);

      return res
        .status(201)
        .json({ message: "Товар успешно добавлен", item: newOrders14 });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Что-то пошло не так" });
    }
  } else {
    res.status(405).json({ error: "Метод не поддерживается" });
  }
};
