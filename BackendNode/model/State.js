const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StateSchema = new Schema(
    {
        state_id:{
            type:Number,
            required:true
        },
        state_name:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model('State',StateSchema)