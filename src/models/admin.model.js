const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = mongoose.Schema(
  {
    sEmail: String,
    sPassword: String,
    sName: String,
    sUserType: {
      type: String,
      enum: ["supplier", "buyer"]
    }
  },
  {
    timestamps: true
  }
);

AdminSchema.pre("save", async function (next) {
  if (this.sPassword) {
    this.sPassword = await bcrypt.hash(this.sPassword, 8);
  }
  next();
});

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;
