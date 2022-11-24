const Comment = require('../models/Comment')
const User = require('../models/User')

module.exports = {
  createComment: async (req, res) => {
    try {
      const commentUser = await User.findById(req.user.id)
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        activity: req.params.id,
        createdBy: commentUser.userName,
        createdById: req.user.id
      })
      console.log('commented')
      res.redirect('/suggestions/'+req.params.id)
    } catch (err) {
      console.log(err)
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.deleteOne({_id: req.params.commentid})
      console.log('comment bye')
      res.redirect('/suggestions/'+req.params.activityid)
    } catch (err) {
      console.log(err)
    }
  }
}