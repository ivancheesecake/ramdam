const mongoose = require("mongoose");

const BarangaySchema = mongoose.Schema({
  type: String,
  //   properties: Object,
  //   geometry: Object,
});

module.exports = mongoose.model("barangays", BarangaySchema);
