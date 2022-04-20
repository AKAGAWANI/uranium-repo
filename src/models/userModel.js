const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
	balance:{
        type:Number,
        default:100
    },
	address:String,
	age:String,
 	gender:{
         enum:["male","female","other"]
     },
	isFreeAppUser:Boolean
    
}, { timestamps: true });

module.exports = mongoose.model('Customer', userSchema) //users
