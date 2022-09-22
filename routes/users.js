const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");


//UPDATE USER
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("ACCOUNT HAS BEEN UPDATED")
        } catch (err) {
            console.log(err);
        }

    } else {
        return res.status(403).json("YOU CAN UPDATE ONLY YOUR ACCOUNT");
    }

})


//DELETE USER
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete({_id: req.params.id});
            res.status(200).json("ACCOUNT HAS BEEN DELETED")
        } catch (err) {
            console.log(err);
        }

    } else {
        return res.status(403).json("YOU CAN DELETE ONLY YOUR ACCOUNT");
    }

})


//GET USER
router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, updatedAt, isAdmin, ...other}=user._doc;
        res.status(200).send(other);
    }catch(err){
        console.log(err);
    }
});


//FOLLOW A USER
router.put("/:id/follow",async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.body.userId}});
                res.status(200).json("USER HAS BEEN FOLLOWED");
            }else{
                return res.status(403).json("YOU ALREADY FOLLOW THIS USER");
            }
        }catch(err){
            console.log(err);
        }
    }else{
        return res.status(403).json("YOU CAN'T FOLLOW YOURSELF");
    }
})


//UNFOLLOW A USER
router.put("/:id/unfollow",async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.body.userId}});
                res.status(200).json("USER HAS BEEN UNFOLLOWED");
            }else{
                return res.status(403).json("YOU ALREADY UNFOLLOWED THIS USER");
            }
        }catch(err){
            console.log(err);
        }
    }else{
        return res.status(403).json("YOU CAN'T UNFOLLOW YOURSELF");
    }
})
module.exports = router;