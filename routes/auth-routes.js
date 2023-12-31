const express = require("express");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router.get("/login", authController.getLogin);

router.post("/login", authController.postLogin);

router.get("/signup", authController.getSignup);

router.post("/signup", authController.postSignup);

router.get("/logout", authController.logout);

module.exports = router;
