const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController")
const appController= require("../controllers/appController")
const midlw= require("../mw/mw")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/profiledetails", appController.proDetails )

router.post("/prolog", appController.proLog )
router.get("/profiledetails/:userId", midlw.check,appController.proHome )
router.put("/profiledetails/:userId", midlw.check,appController.proUpdate )
router.delete("/profiledetails/:userId", midlw.check,appController.proDelete )
// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

module.exports = router;