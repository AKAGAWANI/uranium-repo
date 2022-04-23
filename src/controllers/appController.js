const jwt = require("jsonwebtoken");
const profileModel = require("../models/profileModel");

const proDetails=async function(req,res){
  try{
    let data=req.body
    Data=await profileModel.create(data)
    res.status(201).send({details:Data})
  } catch(error){
    res.status(500).send({msg:"server error",error:error.message})
  }
}
const proLog=async function(req,res){
  try{
    let data=req.body
    searchh=await profileModel.findOne({emailId:data.userId,password:data.password})
    if(!searchh) res.status(400).send({msg:"enter valid credentials"})
    let token=jwt.sign({    userId:searchh._id.toString(),
                                name:"john",
                                work:"wrestling"
                                },"uranium")
    res.header("x-auth-token",token)                           
    res.send({msg:token})
                              } catch(error){
                                res.status(500).send({msg:"server error",error:error.message})
                              }
}
const proHome = async function(req,res){
 try{
  let userId= req.params.userId;
    homePage=await profileModel.findById(userId)
    if (!homePage)
      return res.status(404).send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: homePage
    });   
  } catch(error){
    res.status(500).send({msg:"server error",error:error.message})
  }
}

const proUpdate = async function (req, res) {
   try{
    let userId = req.params.userId;
      let user = await profileModel.findById(userId);
      if (!user) {
        return res.status(404).send("No such user exists");
      }
    
      let userData = req.body;
      let updt = await profileModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
      res.send({  data: updt });
    } catch(error){
      res.status(500).send({msg:"server error",error:error.message})
    }
    };


const proDelete = async function (req, res) {

    try{
      let userId = req.params.userId;
      let user = await profileModel.findById(userId);
      if (!user) {
        return res.status(404).send("No such user exists");
      }
    
      let prodel= await profileModel.findOneAndUpdate({ _id: userId },{isDeleted:false},{new:true});
      res.send({  data: prodel });
    } catch(error){
      res.status(500).send({msg:"server error",error:error.message})
    }
    };


module.exports.proDetails=proDetails
module.exports.proLog=proLog
module.exports.proHome=proHome
module.exports.proUpdate=proUpdate
module.exports.proDelete=proDelete