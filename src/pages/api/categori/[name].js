import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const { Schema } = mongoose;
const categoriSchema = new Schema({});
categoriSchema.plugin(mongoosePaginate);

const Categori =
  mongoose.models.Categori ||
  mongoose.model("Categori", categoriSchema, "products");

const font = async (req, res) => {
  const { name } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  try {
    const options = {
      page,
      limit,
    };
    const result = await Categori.paginate({ categori: name }, options);

    res.status(200).json(result);
  } catch (error) {
    console.error("Помилка:", error);
    res.status(500).json({ error: "Внутрішня помилка сервера" });
  }
};

export default font;
