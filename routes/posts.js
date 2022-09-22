const router = require("express").Router();
const Post = require("../models/Post")

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
router.get("/timeline",async(req,res)=>{
    const postArray = [];
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPost = await Post.find({userId: currentUser._id});
        const friendPost = await Promise.all(
            currentUser.followings.map((friendId)=>{
                Post.find({userId: friendId});
            })
        )
        res.json(userPost.concat(...friendPost));
    }catch(err){
        console.log(err);
    }
})
module.exports = router;