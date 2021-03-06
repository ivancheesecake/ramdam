const express = require("express");
const router = express.Router();
const Muncity = require("../models/Muncity");
const cors = require("cors");

router.get("/", cors(), async (req, res) => {
  try {
    const muncities = await Muncity.find({});
    res.json(muncities);
  } catch (err) {
    res.json({ message: err });
  }
  //   res.send("Barangays");
});

// router.get("/:muncityCode", cors(), async (req, res) => {
//   try {
//     const barangays = await Barangay.find({
//       "properties.Mun_Code": req.params.muncityCode,
//     });
//     res.json({
//       type: "FeatureCollection",
//       name: "barangays",
//       features: barangays,
//     });
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.get("/specific/:bgyCode", cors(), async (req, res) => {
//   try {
//     const barangays = await Barangay.find({
//       "properties.Bgy_Code": req.params.bgyCode,
//     });
//     res.json({
//       type: "FeatureCollection",
//       name: "barangays",
//       features: barangays,
//     });
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
