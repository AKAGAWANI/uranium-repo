const AuthorModel= require("../models/authorModel")
const publisherModel=require("../models/publisherModel")
const bookModel=require("../models/bookModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}
const createeBook= async function (req, res) {
    let book = req.body
    let authors = await AuthorModel.find().select({_id:1})
    let publisheR =await publisherModel.find().select({_id:1})
    if (book.authorId && book.publisherId){
        if (authors[0]._id==book.authorId && publisheR[0]._id==book.publisherId){
    let bookCreated = await bookModel.create(book)
    res.send({data:bookCreated})}
    else{ res.send({msg:"autherId or publisherId does not match"})}

}
    else{res.send({msg:"AuthorId or publisherId is empty"})}
}
const geteBook= async function (req, res) {
    let list=await bookModel.find().populate('authorId publisherId')
    res.send({data:list})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.createPublisher= createPublisher
module.exports.createeBook= createeBook
module.exports.geteBook= geteBook
