// api/auth.js
import mongoose from "mongoose";
import UserSchema from "./models/user";

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const font = async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await UserSchema.find({ login: login, pass: password });
    res.status(200).json(user);
  } catch (error) {
    console.error("Помилка при перевірці аутентифікації:", error);
    res.status(500).json({ message: "Помилка сервера" });
  }
};
export default font;
