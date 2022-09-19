const router = require("express").Router();
const User = require("../models/User")

//REGISTERING DATA
router.get("/register", async (req, res) => {
    const user = await new User({
        username: "john",
        email: "john@gmail.com",
        password: "12345678"
    })
    await user.save();
    res.send("OK");
})

module.exports = router;