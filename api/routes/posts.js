const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//CREATE A POST 
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        console.log(err);
    }
})


//UPDATE A POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await Post.updateOne({$set: req.body});
            res.status(200).json("POST HAS BEEN UPDATED");
        } else {
            res.status(403).json("YOU CAN UPDATE ONLY YOUR POST");
        }
    } catch (err) {
        console.log(err);
    }
})


//DELETE A POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await Post.deleteOne();
            res.status(200).json("POST HAS BEEN DELETED");
        } else {
            res.status(403).json("YOU CAN DELETE ONLY YOUR POST");
        }
    } catch (err) {
        console.log(err);
    }
})


//LIKE OR DISLIKE A POST
router.put("/:id/like",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("YOU LIKED THIS POST")
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("YOU DISLIKED THIS POST");
        }
    }catch(err){
        console.log(err);
    }
})


//GET A POST
router.get("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        console.log(err);
    }
})


//GET TIMELINE POST 
router.get("/timeline/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
      res.status(500).json(err);
    }
  });


//GET USERS ALL POST 
router.get("/profile/:uername", async (req, res) => {
    try {
        const user = await User.findOne({username:req.params.username});
      const posts=await Post.find({userId:user._id});
      res.status(200).json(posts)
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;