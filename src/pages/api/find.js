import Orders from "./models/orders";
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
    Orders.find()
      .then((product) => {
        console.log(product);
        res.status(200).json(product);
      })
      .catch(console.log((err) => handleError(res, err)));
  }
};
export default font;
