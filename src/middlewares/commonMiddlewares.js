

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     //counter
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4

const mwCheck=function(req,res,next){
const free=req.headers.isfreeappuser
    if (free){
        next()
    }
    else{
        res.send("not allowed")
    }
    }
    module.exports.mwCheck=mwCheck