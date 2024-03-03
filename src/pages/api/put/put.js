import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const putSchema = new Schema({
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
const Put = mongoose.models.Put || mongoose.model("Put", putSchema, "products");
mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const handleError = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  //   const { com, article } = req.body;
  const com = "ta";
  const article = "DZ-6-2 88*56-1";
  try {
    const updatedPut = await Put.findOneAndUpdate(
      { article: article },
      { $set: { com: com } },
      { new: true }
    );
    res.json(updatedPut);
  } catch (error) {
    handleError(res, error);
  }
};
export default font;
