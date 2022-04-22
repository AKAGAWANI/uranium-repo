const jwt = require("jsonwebtoken");


const check=function(req,res,next){
let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];
if (!token) return res.send({ status: false, msg: "token must be present" });

let decodeToken=jwt.verify(token,"uranium")
if(!decodeToken) return res.send({msg:"token verification failed"})
next()
}

module.exports.check=check