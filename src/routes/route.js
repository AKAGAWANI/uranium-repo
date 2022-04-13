const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const newbController=require("../controllers/newbController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)
router.get("/newb", newbController.newbGet)
router.post("/newb", newbController.newbPost)
router.get("/booklist", newbController.bookList)
router.get("/newb", newbController.getBooksInYear)
router.get("/newbook", newbController.getBy)
router.get("/newbINR", newbController.getByINR)
router.get("/getb", newbController.getBook)

module.exports = router;