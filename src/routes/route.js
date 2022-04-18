const express = require('express');
const router = express.Router();

const newwController= require("../controllers/newwController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook  )
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.get("/getBooksData", bookController.getBooksData)


router.post("/createAuthor", newwController.createAuthor  )

router.get("/getAuthorsData", newwController.getAuthorsData)

router.post("/createpublisher", newwController.createPublisher  )
router.post("/createeBook", newwController.createeBook  )
router.get("/createeBook", newwController.geteBook  )
router.put("/updateBooks", newwController.updateBooks )
router.put("/price", newwController.incPrice )



module.exports = router
