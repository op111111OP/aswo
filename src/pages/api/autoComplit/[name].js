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
    Novelty.find(
      { name: { $regex: name, $options: 'i' } },
      { _id: 1, name: 1 }
    )
      .limit(5)

      .then((product) => {
        res.status(200).json(product);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
};
export default font;
