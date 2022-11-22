const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        userid:{
            type:Number,
            required:true
        },
        user_name:{
            type:String,
            required:true
        },
        user_email:{
            type:String,
            required: true
        },
        user_phonenumber:{
            type: Number,
            required:true
        }
    }
)

module.exports = mongoose.model('User',User)