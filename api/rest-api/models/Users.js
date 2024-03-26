const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Write UserName"],
    },
    email: {
      type: String,
      unique: [true, "Email already existed"],
      lowercase: true,
      required: [true, "Please write email"],
    },
    password: {
      type: String,
      required: [true, "Please write password"],
    },
  },
  { collection: "userData" }
);
////// Check Password Validaton on user Login
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  console.log(candidatePassword, userPassword);
  return await bcrypt.compare(candidatePassword, userPassword);
};
///// Encrypt the password on user singnUp
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
