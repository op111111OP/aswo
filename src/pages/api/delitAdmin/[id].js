// import Novelty from "../models/novelty";
import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const ordersSchema4q = new Schema({});
const Novelty4q =
  mongoose.models.Novelty4 ||
  mongoose.model("Novelty4q", ordersSchema4q, "products");
const handleError4q = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  const { id } = req.query;

  Novelty4q.deleteOne({ article: id })
    .then(() => {
      res.status(200).json({ delit: true });
    })
    .catch((err) => handleError4q(res, err));
};
export default font;
