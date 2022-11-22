const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollingUnit = new Schema(
    {
        pollingunitdetail_id:{
            type:Schema.Types.ObjectId,
            ref:'PollingUnitDetails',
            required:true
        },
        party:{
            type:String,
            required:true
        },
        result:{
            type:Number,
            required:true
        },
        ward_id:{
            type:Schema.Types.ObjectId,
            ref:'Ward'
        },
        lga_id:{
            type:Schema.Types.ObjectId,
            ref:'LGA'
        },
        state_id:{
            type:Schema.Types.ObjectId,
            ref:'State'
        },
        userid:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    }
)

module.exports = mongoose.model('PollingUnit',PollingUnit)