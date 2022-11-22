const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LgaSchema = new Schema(
    {
        lga_id:{
            type:Number,
            required:true
        },
        lga_name:{
            type:String,
            required:true
        },
        party:{
            type:String,
            required:true
        },
        lga_result:{
            type:Number
        }
    }
)

module.exports = mongoose.model('LGA',LgaSchema)