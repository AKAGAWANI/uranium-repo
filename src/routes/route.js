const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const activityController= require("../controllers/activityController");
const { mwCheck } = require('../middlewares/commonMiddlewares');
// const commonmw=require("./middlewares/commonMiddlewares")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createproduct", activityController.createProduct  )
router.post("/createuser",mwCheck ,activityController.createUser  )
router.post("/createorder",mwCheck ,activityController.createOrder  )

// router.get("/getUsersData", UserController.getUsersData)


module.exports = router;