const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const booksModel= require("../models/booksModel.js")
const UserController= require("../controllers/userController")
const booksController= require("../controllers/booksController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", booksController.postBook  )
router.get("/createBook", booksController.getBook  )


module.exports = router;