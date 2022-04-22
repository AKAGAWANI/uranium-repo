const jwt = require("jsonwebtoken");
const profileModel = require("../models/profileModel");

const proDetails=async function(req,res){
    let data=req.body
    Data=await profileModel.create(data)
    res.send({details:Data})
}
const proLog=async function(req,res){
    let data=req.body
    searchh=await profileModel.findOne({emailId:data.userId,password:data.password})
    if(!searchh) res.send({msg:"enter valid credentials"})
    let token=jwt.sign({    userId:searchh._id.toString(),
                                name:"john",
                                work:"wrestling"
                                },"uranium")
    res.setHeader("x-auth-token",token)                           
    res.send({msg:token})
}

const proHome= async function(req,res){
let userId = req.params.userId;
    homePage=await profileModel.findById(userId)
    if (!homePage)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: homePage
     });   
}


const proUpdate = async function (req, res) {
   
    let userId = req.params.userId;
      let user = await profileModel.findById(userId);
      if (!user) {
        return res.send("No such user exists");
      }
    
      let userData = req.body;
      let updt = await profileModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
      res.send({  data: updt });
    };


const proDelete = async function (req, res) {

    
      let userId = req.params.userId;
      let user = await profileModel.findById(userId);
      if (!user) {
        return res.send("No such user exists");
      }
    
      let prodel= await profileModel.findOneAndUpdate({ _id: userId },{isDeleted:false},{new:true});
      res.send({  data: prodel });
    };


module.exports.proDetails=proDetails
module.exports.proLog=proLog
module.exports.proHome=proHome
module.exports.proUpdate=proUpdate
module.exports.proDelete=proDelete