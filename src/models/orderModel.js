const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
	userId:{
        type:ObjectId,
        ref:'Costumer'
    },
	productId: {
        type:ObjectId,
        ref:'Product'
    },
	amount:{
        type:Number,
        default:0
    },
	isFreeAppUser:{
        type:Boolean,
        default:true},
	date:{
        type:Date,
        default:Date.now()
    }

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) //users