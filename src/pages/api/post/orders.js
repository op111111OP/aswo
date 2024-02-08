import Orders from "../models/orders copy";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
      } = req.body;

      const newOrders = new Orders({
        city,
        email,
        first_name,
        last_name,
        message,
        phone,
        someField,
        street,
        userData,
      });
      console.log(newOrders);
      await newOrders.save();

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
