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
const gtAuthor= async function (req, res) {
        let saved= await authorModel.find()
        res.send({msg: saved})
   
}
const createBook= async function (req, res) {
    let data= req.body
    if(data.author_id) {
        let bookD= await bookModel.create(data)
        res.send({msg: bookD})
    } else {
        res.send({msg: 'author_id must be present'})
    }}

const geteBook= async function (req, res) {
   
        let getbookD= await bookModel.find()
        res.send({msg: getbookD})
   
    }
const chetan= async function (req, res) {
   
        let cheta= await authorModel.find({author_name:'Chetan Bhagat'})
        let x =cheta[0].author_id
        let bhagat=await bookModel.find({author_id:x})
        res.send(bhagat)
   
    }
const updt= async function (req, res) {
   
    let updt1=await bookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set:{price:100}},
        {new:true}
        )
    let x =updt1.author_id
    let writer= await authorModel.find({author_id:x}).select({author_name:1,_id:0})
  
    res.send(writer[0].author_name+ " and updated price is " + updt1.price)
    }
const bookRange= async function (req, res) {

   authorlist=[]
    let availbooks=await bookModel.find({price:{$gte:50,$lte:100}}).select({name:1,author_id:1, _id:0})
    for (i=0;i<availbooks.length;i++){
        let x=availbooks[i].author_id
        authoR = await authorModel.find({author_id:x}).select({author_name:1,_id:0})
    authorlist.push(authoR)
    }
        res.send(authorlist)
    
    }


module.exports.createAuthor= createAuthor
module.exports.gtAuthor= gtAuthor
module.exports.createBook= createBook
module.exports.geteBook= geteBook
module.exports.chetan= chetan
module.exports.updt= updt
module.exports.bookRange=bookRange 
