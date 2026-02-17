import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
  membershipNo: {
    type: String,
    required: true,
    unique: true
  },

  memberName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  duration: {
    type: String,
    enum: ["6", "12", "24"],
    default: "6"
  },

  status: {
    type: String,
    enum: ["active", "cancelled"],
    default: "active"
  }
});

export default mongoose.model("Membership", membershipSchema);
