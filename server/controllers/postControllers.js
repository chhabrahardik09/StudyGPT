const jwt = require('jsonwebtoken');
require("dotenv").config();
const Post = require('../models/Post');
const { param } = require('../routes/postRoutes');

exports.regUser = async (req, res, next) => {
    try {
        let obj = req.body;
        console.log(obj)
        let val = await Post.register(obj);
        if (val != 1) val = 0;
        return res.json({
            success: val
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.hard = async (req,res,next) =>{
    console.log('I am in post controller');
    let val = await Post.hard();
    res.status(200).json( val[0] );
}
exports.login = async (req, res, next) => {
    try {
        let obj = req.body;
        let result = await Post.login(obj.username, obj.password);
        console.log("token: " + result)
        if (result == null) {
            sucvar = 0;
            msg = "WRONG USERNAME PASSWORD"
        }
        else {
            sucvar = 1;
            msg = "Login successful"
        }
        return res.json({
            success: sucvar,
            message: msg,
            token: result
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}