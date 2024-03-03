// import Novelty from "../models/novelty";
import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const ordersa = new Schema({});
const Nova =
  mongoose.models.Nova || mongoose.model("Nova", ordersa, "products");
const handa = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  const { id } = req.query;

  Nova.find({ article: id })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => handa(res, err));
};
export default font;
