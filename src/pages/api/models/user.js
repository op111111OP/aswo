import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
});

const Novelty =
  mongoose.models.UserSchema ||
  mongoose.model("UserSchema", UserSchema, "adminUser");

export default Novelty;
