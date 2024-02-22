import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const { Schema } = mongoose;
const categoriSchema1 = new Schema({});
categoriSchema1.plugin(mongoosePaginate);

const Categori1 =
  mongoose.models.Categori ||
  mongoose.model("Categori1", categoriSchema1, "products");

const font = async (req, res) => {
  const { name } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  try {
    const options = {
      page,
      limit,
    };
    const result = await Categori1.paginate(
      { name: { $regex: name, $options: "i" } },
      // { score: { $meta: "searchScore" } },
      options
    );

    res.status(200).json(result);
  } catch (error) {
    console.error("Помилка:", error);
    res.status(500).json({ error: "Внутрішня помилка сервера" });
  }
};

export default font;

// import Novelty from "../models/novelty";
// import mongoose from "mongoose";

// mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const handleError = (res, err) => {
//   console.error("Error:", err);
//   res.status(500).json({ error: "Internal Server Error" });
// };

// const font = async (req, res) => {
//   const { name } = req.query;

//   if (req.method === "GET") {
//     Novelty.find(
//       { name: { $regex: name, $options: "i" } },
//       { score: { $meta: "searchScore" } }
//     )
//       .limit(30)
//       .then((product) => {
//         res.status(200).json(product);
//       })
//       .catch((err) => handleError(res, err));
//   }
// };
// export default font;
