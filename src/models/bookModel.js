const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    price: Number,
    ratings: Number,
    authorId:{
        type:ObjectId,
        ref:'newwAuthor'   
    },
    publisherId:{
        type:ObjectId,
        ref:'newwPublisher'
    },
    isHardCover:{ type:Boolean,
        default:false

    }
}, { timestamps: true });


module.exports = mongoose.model('newwBook', bookSchema)
