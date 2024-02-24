import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const ord = new Schema({});
const Nov = mongoose.models.Nov || mongoose.model("Nov", ord, "categori");
const hand = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  const { i } = req.query;
  console.log(i);
  Nov.find({ _id: i })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => hand(res, err));
};
export default font;
