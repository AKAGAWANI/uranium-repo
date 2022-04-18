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

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createDev= createDev
module.exports.createBatch= createBatch
