const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const suggestionsController = require("../controllers/suggestions");
const { ensureAuth } = require("../middleware/auth");

//Post Routes
//since linked from server js treat each path as:
//post/:id, post/createPost, post/likePost/:id, post/deletePost/:id
router.get("/:id", ensureAuth, suggestionsController.getSuggestion);

//enables user to create post w/ cloudinary for media uploads.
router.post("/createSuggestion", suggestionsController.createSuggestion);

// router.post("/favoriteRecipe/:id", recipesController.favoriteRecipe);

//enables user to like post. In controller uses POST model to update likes by 1
router.put("/likeSuggestion/:id", suggestionsController.likeSuggestion);

//enables user to delete post. In controller uses POST model to delete post from mongodb collection
// router.delete("/deleteRecipe/:id", recipesController.deleteRecipe);

module.exports = router;
