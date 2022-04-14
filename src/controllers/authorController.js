const authorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    if(data.author_id) {
        let savedData= await authorModel.create(data)
        res.send({msg: savedData})
    } else {
        res.send({msg: 'author_id must be present'})
    }
}
const createBook= async function (req, res) {
    let data= req.body
    if(data.author_id) {
        let bookD= await bookModel.create(data)
        res.send({msg: bookD})
    } else {
        res.send({msg: 'author_id must be present'})
    }
}
const geteBook= async function (req, res) {
   
        let getbookD= await bookModel.find()
        res.send({msg: getbookD})
   
    }


module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.geteBook= geteBook
