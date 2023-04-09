const express = require('express');
const postController = require('../controllers/postControllers');
const router = express.Router();

const { checkToken } = require("../auth/token_validation");

router.route("/register").post(postController.regUser);
router.route("/login").post(postController.login);


module.exports=router;