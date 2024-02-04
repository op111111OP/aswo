import Novelty from "../models/novelty";
import mongoose from "mongoose";

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const handleError = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  const { name } = req.query;
  if (req.method === "GET") {
    Novelty.find({ categori: name })
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => handleError(res, err));
  }
};
export default font;
