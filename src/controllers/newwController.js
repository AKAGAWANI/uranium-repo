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
    let authors = await AuthorModel.find({_id:book.authorId}).select({_id:1})
    let publisheR =await publisherModel.find({_id:book.publisherId}).select({_id:1})
    if (book.authorId && book.publisherId){
        if (authors.length && publisheR.length){
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

const updateBooks = async function (req, res) {
    let hardCOverPublishers = await publisherModel.find({name : {$in:['Penguine','Harper Collins'] }}).select({_id:1})
    let arrayOfPublishers = []
    
    for (let i = 0; i < hardCOverPublishers.length; i++) {
        let objId = hardCOverPublishers[i]._id 
        arrayOfPublishers.push(objId)
    }
    
    let books = await bookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})

    res.send({data: books})
}
const incPrice= async function (req, res) {
    let list=await AuthorModel.find({rating:{$gt:3.5}})
    let list1=await bookModel.updateMany({authorId:list},{$inc:{price:10}})
    res.send({data:list1})
}




module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.createPublisher= createPublisher
module.exports.createeBook= createeBook
module.exports.geteBook= geteBook
module.exports.updateBooks = updateBooks
module.exports.incPrice= incPrice
