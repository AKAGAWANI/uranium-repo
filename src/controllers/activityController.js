const req = require("express/lib/request")
const userModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")


const createProduct= async function(req, res) {
    const data=req.body
   let Data =await productModel.create(data)
   res.send(Data)
    
    }
const createUser= async function(req, res) {
    
    const data=req.body
   let Data =await userModel.create(data)
   res.send(Data)
   
    }
const createOrder= async function(req, res) {
    const data=req.body
   let pPrice=await productModel.find({_id:data.productId}).select({price:1,_id:0})

    let uBalance=await userModel.find({_id:data.userId}).select({balance:1,_id:0})
    // console.log(uBalance[0].balance)

    let Data =await orderModel.create(data)
    let save=await orderModel.find().select({_id:1})

    free=req.headers.isfreeappuser


    if(!req.body.userId || !req.body.productId){
        res.send("Id is missing")
    }
 if( free==true){
    let data=req.body
    let Data =await orderModel.create(data)
    res.send(Data)
}

  if(uBalance[0].balance<pPrice[0].price) { res.send("low balance")  }
else 
    {
       let  data=req.body

   
   let deduct=await userModel.findOneAndUpdate({_id:data.userId},{$inc:{balance:-pPrice[0].price}},{new:true})
   let print=await orderModel.updateMany({_id:save[0]._id},
    {$set:({amount:pPrice[0].price} ,{isFreeAppUser:false}  ) },
    {new:true,upsert:true})




//    console.log("false")
    res.send(print)


    }

   
    }
    

    module.exports.createProduct= createProduct
    module.exports.createUser=createUser
    module.exports.createOrder=createOrder












// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)
//     //counter
//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
    
//     }


// const createAUser = function(req, res) {
//     let requestBody = req.body
//     let headers  = req.headers
    

//     //Printing all the headers before modification - addition of a new header called 'month'
//     console.log('Request headers are before: ', headers)

//     //Accessing a request header called 'batch'
//     let batchHeader = headers["batch"] // headers.batch 
    
//     ///Accessing a request header called 'content-type'
//     let contentHeader = headers['content-type'] // headers.content-type

//     console.log('Content Type hedser is: ',contentHeader)
//     console.log('Batch header is: ', batchHeader)

//     //Adding a new requets header
//     req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


//     //Printing the headers after modification - addition of a new header called 'month'
//     console.log('Request headers are after: ', headers)


//     console.log('Request property called current-day', req['current-day'])=wed
    
//     //Adding a response header
//     res.header('year', '2022')

//     res.send('Just create a user')
// }

// module.exports.createAUser = createAUser
// module.exports.basicCode = basicCode

















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode