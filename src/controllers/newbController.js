const newbModel = require("../models/newbModel");

const newbPost= async function(req,res){
    let data=req.body
    let postData=await newbModel.create(data)
    res.send(postData)

}
const newbGet=async function(req,res){
    let getData=await newbModel.find()
    res.send(getData)

}
const bookList=async function(req,res){
    let na=await newbModel.find().select({bookName:1,authorName:1,_id:0})
    res.send(na)

}
const getBooksInYear=async function(req,res){
    let x=req.body.year
    let yr=await newbModel.find({year:x})
    res.send({msg:yr})
}
const getBy=async function(req,res){
    let x=req.body
    let book=await newbModel.find(x)
    res.send({msg:book})
}
const getByINR=async function(req,res){
    let indianb=await newbModel.find({'price.indianPrice':{$in:["100INR","300INR","500INR"]}})
    res.send({msg:indianb})
}
const getBook=async function(req,res){
    let available=await newbModel.find({$or:[{isPublished:true},{pages:{$gt:500}}]})
    res.send({msg:available})
}

module.exports.newbGet=newbGet
module.exports.newbPost=newbPost
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getBy=getBy
module.exports.getByINR=getByINR
module.exports.getBook=getBook