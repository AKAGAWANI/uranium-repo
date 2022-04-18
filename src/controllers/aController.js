const { query } = require("express")
const batchModel= require("../models/batchModel")
const devModel=require("../models/developerModel")

const createDev= async function (req, res) {
    let dev= req.body
    let devCreated = await devModel.create(dev)
    res.send({data: devCreated})
}
const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({data: batchCreated})
}
const scholorship= async function (req, res) {
    let eligibleDev = await devModel.find({gender:"female",percentage:{$gte:70}}).populate('batch')
    res.send({data: eligibleDev})
}

const developers= async function (req, res) {
    let perc =req.query
    let batchWise=[]
    let percentage55 = await devModel.find({percentage:{$gte:perc.percentage}}).populate('batch')
    for(let i=0;i<percentage55.length;i++){
        if(percentage55[i].batch.name==perc.program){
           batchWise.push(percentage55[i])
            
        }
    }
res.send({data:batchWise})
}
// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createDev= createDev
module.exports.createBatch= createBatch
module.exports.scholorship=scholorship
module.exports.developers=developers

