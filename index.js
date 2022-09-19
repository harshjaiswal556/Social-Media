const express = require("express");
const app = express();
const port = process.env.PORT || 8800;


//REQUIRING SOME MORE USEFULL PACKAGES
const dotenv = require("dotenv");
dotenv.config();
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");


//CONNECTING WITH MONGODB
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}, {useUnifiedTopology:true}).then(()=>{
    console.log("Connection successful");
}).catch((err)=>{
    console.log(err);
});


//MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


//CALLING PAGES 
app.get("/",(req,res)=>{
    res.send("WELCOME TO HOME PAGE");
})

app.get("/user",(req,res)=>{
    res.send("WELCOME TO USER PAGE");
})


//RUNNING OUR SERVER
app.listen(port, () => {
    console.log("Server is running at port " + port);
})