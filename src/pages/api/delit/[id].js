// import Novelty from "../models/novelty";
import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const ordersSchema4 = new Schema({});
const Novelty4 =
  mongoose.models.Novelty4 ||
  mongoose.model("Novelty4", ordersSchema4, "order");
const handleError4 = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  const { id } = req.query;
  console.log(id);
  Novelty4.deleteOne({ _id: id })
    .then(() => {
      res.status(200).json({ delit: true });
    })
    .catch((err) => handleError4(res, err));
};
export default font;
