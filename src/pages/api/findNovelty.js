import Novelty from "./models/novelty";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://p47601758:111111OPop@base.e0cgzgc.mongodb.net/menu?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const handleError = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  if (req.method === "GET") {
    Novelty.find()
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => handleError(res, err));
  }
};
export default font;
