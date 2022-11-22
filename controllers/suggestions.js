const cloudinary = require("../middleware/cloudinary");
const Activity = require("../models/Activity");
const User = require("../models/User")
// const Favorite = require("../models/Favorite");

module.exports = {
  getMain: async (req, res) => {
    try {
      const activities = await Activity.find({})
      //console.log(activities)

      res.render('main.ejs', {activities: activities, user: req.user})
    } catch (error) {
      console.log(error);
      
    }
  },
  getProfile: async (req, res) => {
  //   console.log(req.user)
    try {
      //since we have a session each request sontaines the logged in user's info: req.user 
      //console.log(req.user) to see everything
      //grabbing just the posts of the logged-in user
      const activities = await Activity.find({ user: req.user.id });
      //sending post data from mongo db and user data to ejs template
      res.render("profile.ejs", { activities: activities, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  // getFavorites: async (req, res) => {
  //   try {
  //     //since we have a session each request sontaines the logged in user's info: req.user 
  //     //console.log(req.user) to see everything
  //     //grabbing just the posts of the logged-in user
  //     const recipes = await Favorite.find({ user: req.user.id }).populate('recipe');
  //     console.log(recipes)
  //     //sending post data from mongo db and user data to ejs template
  //     res.render("favorites.ejs", { recipes: recipes, user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  getSuggestion: async (req, res) => {
    try {
      //id parameter comes from the post routes
      //router.get("/:id", ensureAuth, postsController.getPost);
      //http://localhost:2121/post/634d481f908f413d185f31a3
      //id === 634d481f908f413d185f31a3
      const activity = await Activity.findById(req.params.id);
      res.render("suggestion.ejs", { activity: activity, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createSuggestion: async (req, res) => {
    try {
      const suggestionUser = await User.findById(req.user.id)
      await Activity.create({
        name: req.body.name,
        link: req.body.link,
        description: req.body.description,
        loves: 0,
        likes: 0,
        dislikes: 0,
        price: req.body.price,
        season: req.body.season,
        typeOfActivity: req.body.typeOfActivity,
        user: req.user.id,
        suggestedBy: suggestionUser.userName,
      });
      console.log("suggestion has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  // favoriteRecipe: async (req, res) => {
  //   try {
  //     //media is stored on cloudinary - the above request responds with url to media and the media id that you will need when deleteing content
  //     await Favorite.create({
  //       user: req.user.id,
  //       recipe: req.params.id
  //     });
  //     console.log("Photo has been added!");
  //     res.redirect(`/recipe/${req.params.id}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  likeSuggestion: async (req, res) => {
    try {
      await Activity.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/suggestions/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  // deleteRecipe: async (req, res) => {
  //   try {
  //     // Find post by id
  //     let recipe = await Recipe.findById({ _id: req.params.id });
  //     // Delete image from cloudinary
  //     await cloudinary.uploader.destroy(recipe.cloudinaryId);
  //     // Delete post from db
  //     await Recipe.remove({ _id: req.params.id });
  //     console.log("Deleted Recipe");
  //     res.redirect("/profile");
  //   } catch (err) {
  //     res.redirect("/profile");
  //   }
  // },
};
