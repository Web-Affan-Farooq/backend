const express = require("express");
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

/* install jsainwebtoken expressjs cookie parser for parsing cookie and bcrypt */
const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
    // res.cookie("name","Muhammad affan", {
    //     httpOnly:true
    // }) // for setting  cookie from server
    const data = {
        email:"affanamir903@gmail.com"
    }
    let token = jwt.sign(data, "secret");
    // console.log(token);
    res.cookie("token", token, {
        httpOnly:true,
    })    
    res.send("Hello world")
});
app.get("/profile", (req,res) => {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data);
    res.send("profile page")
})
app.listen(3000, () => { console.log("Server is running on port 3000");})
