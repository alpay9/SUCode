const express = require("express");
const configController = require("../controllers/config-controller");

const router = express.Router();

router.post("/colormode", configController.setColorMode);

module.exports = router;
