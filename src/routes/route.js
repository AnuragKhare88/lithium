const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const userModel = require('../models/userModel.js');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", async function ( req, res){
    let data = req.body
    let savedData = await userModel.create(data)
    res.send({savedData})
})


router.get("/getAllBooks", async function(req,res){
    let allBooks = await userModel.find()
    res.send({msg: allBooks})


})

module.exports = router;