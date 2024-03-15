import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const putSchemaOrderOne = new Schema({
  price: { type: Number },
  name: { type: String },
  categori: { type: String },
  article: { type: String },
  brand: { type: String },
  country: { type: String },
  id: { type: String },
  img: { type: String },
  com: { type: String },
});
const putSchemaOrder = new Schema({
  email: {
    type: String,
  },

  pib: {
    type: String,
  },
  phone: {
    type: String,
  },
  street: {
    type: String,
  },
  card: {
    type: String,
  },
  courier: {
    type: String,
  },
  day: {
    type: String,
  },
  CitiesInput: {
    type: String,
  },
  CitiesInput1: {
    type: String,
  },

  someField: {
    type: Number,
  },
  numB1: {
    type: [Number],
  },
  numB: {
    type: [Number],
  },
  userData: [putSchemaOrderOne],
  department: {
    type: String,
  },
});

const PutOrder =
  mongoose.models.Put || mongoose.model("PutOrder", putSchemaOrder, "order");
mongoose.connect(process.env.REACT_APP_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const handleError = (res, err) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

const font = async (req, res) => {
  const {
    id,
    email,
    pib,
    phone,
    street,
    card,
    courier,
    day,
    CitiesInput,
    CitiesInput1,
    someField,
    numB1,
    numB,
    userData,
    department,
  } = req.body;
  try {
    const updatedPutOrder = await PutOrder.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          email: email,
          pib: pib,
          phone: phone,
          street: street,
          card: card,
          courier: courier,
          day: day,
          CitiesInput: CitiesInput,
          CitiesInput1: CitiesInput1,
          someField: someField,
          numB1: numB1,
          numB: numB,
          userData: userData,
          department: department,
        },
      },
      { new: true }
    );
    res.json(updatedPutOrder);
  } catch (error) {
    handleError(res, error);
  }
};
export default font;
