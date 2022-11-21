const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const suggestionsController = require("../controllers/suggestions");
const { ensureAuth } = require("../middleware/auth");

//Main Routes
router.get("/", homeController.getIndex);
router.get("/main", suggestionsController.getMain);
router.get("/profile", ensureAuth, suggestionsController.getProfile);
// router.get("/favorites", ensureAuth, recipesController.getFavorites);

//routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
