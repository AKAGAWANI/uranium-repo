const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController");
const blogsController = require("../controller/blogsController")
const middleWare = require("../middleware/auth")

router.post("/createAuthor", authorController.createAuthor)
router.post("/loginUser", authorController.login)
<<<<<<< HEAD
router.post("/createBlog/:userId", middleWare.authCheck, blogsController.blogs)
router.get("/getblogs/:userId", middleWare.authCheck, blogsController.getSelectiveBlogs)
=======
router.post("/createBlog/:userId", middleWare.authCheck, blogsController.createBlogs)
>>>>>>> 8eed33f604dd587625b6fa3b4af8e18a6a9c859a
router.put("/updateBlog/:userId/:blogId", middleWare.authCheck, blogsController.updateBlog)
router.get("/getBlogs", blogsController.getBlogs)
router.delete("/deleteBlog/:userId/:blogId", middleWare.authCheck, blogsController.deleteBlog)
router.delete("/delbyquery/:userId", middleWare.authCheck, blogsController.delBlogsByQuery)

module.exports = router;