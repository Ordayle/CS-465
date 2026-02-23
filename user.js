const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

userSchema.methods.setPassword = async function (password) {
  const saltRounds = 10;
  this.passwordHash = await bcrypt.hash(password, saltRounds);
};

userSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

module.exports = mongoose.model("User", userSchema);
