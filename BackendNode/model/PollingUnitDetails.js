const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollingUnitDetailSchema = new Schema(
    {
        pollingunit_id:{
            type:Number,
            required:true
        },
        pollingunit_name:{
            type:String,
            required:true
        },
        pollingunit_address:{
            type:String
        }
    }
)

module.exports = mongoose.model('PollingUnitDetails',PollingUnitDetailSchema)