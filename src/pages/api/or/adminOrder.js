// import Orders from "../models/user";
import mongoose from "mongoose";

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const ordersSchema = new Schema({});
const Orderg =
  mongoose.models.Orderg || mongoose.model("Orderg", ordersSchema, "adminUser");
const handleError = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  if (req.method === "GET") {
    Orderg.find()
      .then((product) => {
        res.status(200).json(product);
      })
      .catch(console.log((err) => handleError(res, err)));
  }
};
export default font;
