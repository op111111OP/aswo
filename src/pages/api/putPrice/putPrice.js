import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const putSchemaPrice = new Schema({
  article: {
    type: String,
  },

  img: {
    type: String,
  },
  price: {
    type: Number,
  },
  brand: {
    type: String,
  },
  country: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  novel: {
    type: Boolean,
  },
  categori: {
    type: String,
  },

  com: {
    type: String,
  },
});
const PutPpice =
  mongoose.models.Put || mongoose.model("PutPrice", putSchemaPrice, "products");
mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const handleError = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  const { com, article } = req.body;
  try {
    const updatedPutPrice = await PutPpice.findOneAndUpdate(
      { article: article },
      { $set: { price: com } },
      { new: true }
    );
    res.json(updatedPutPrice);
  } catch (error) {
    handleError(res, error);
  }
};
export default font;
