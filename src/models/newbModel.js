const mongoose=require('mongoose')

let newbSchema=new mongoose.Schema({
    authorName:String,
    bookName:{type:String,
                require:true},
    year:{ type:Number,
        default:2021
       },
    price:{indianPrice:String,
        europianPrice:String
        },
    tag:[String],
    pages:Number,
    isPublished:Boolean
},{timestamps:true})

module.exports =mongoose.model('Newbooks',newbSchema)