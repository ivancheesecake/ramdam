const mongoose = require("mongoose");

const MuncitySchema = mongoose.Schema({
  Reg_Code: String,
  Reg_Name: String,
  Pro_Code: String,
  Pro_Name: String,
  Mun_Code: String,
  Mun_Name: String,
  Bgy_Code: String,
  Bgy_Name: String,
  Shape_Leng: String,
  Shape_Area: String,
});

module.exports = mongoose.model("muncities", MuncitySchema);
