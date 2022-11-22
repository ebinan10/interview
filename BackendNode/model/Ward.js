const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WardSchema = new Schema(
    {
        ward_id:{
            type:Number,
            required:true
        },
        ward_name:{
            type:String,
            required:true
        },
        ward_description:{
            type:String,
            required:true
        },
        party:{
            type:String,
            required:true
        },
        userid:{
            type:Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        result:{
            type:Number
        }
    }
)

module.exports = mongoose.model('Ward',WardSchema);

