 const mongoose = require('mongoose')
 const LGA = require('../../model/LGA');
const PollingUnit = require('../../model/PollingUnit');
const PollingUnitDetails = require('../../model/PollingUnitDetails');
const State = require('../../model/State');
const User = require('../../model/User');
const Ward = require('../../model/Ward');

 exports.createPollingUnit = async(req,res,next)=>{
    const {unit_id,party,result,ward_id,lga_id,state_id,user_id} = req.body;
    
    const unit = await PollingUnitDetails.find({pollingunit_id:unit_id})
    const user = await User.find({userid:user_id});
    const ward = await Ward.find({ward_id:ward_id});
    const lga = await LGA.find({lga_id:lga_id});
    const state = await State.find({state_id:state_id});
    
    const unitid = mongoose.Types.ObjectId(unit[0]._id);
    const userid = mongoose.Types.ObjectId(user[0]._id);
    const wardid = mongoose.Types.ObjectId(ward[0]._id);
    const lgaid = mongoose.Types.ObjectId(lga[0]._id);
    const stateid = mongoose.Types.ObjectId(state[0]._id);
       try{
        await PollingUnit.create({
        pollingunitdetail_id: unitid,
        party: party,
        result: result,
        ward_id: wardid,
        lga_id: lgaid,
        state_id: stateid,
        userid: userid
       })
       res.status(200).json('polling unit created successfully');
 }
        catch(err){
            console.log(err);
            res.status(200).json(err);
        }
}

exports.getPollingUnit = async( req, res, next) =>{
    try{
        const {unit_id,unit_name} = req.body;
        const pollingUnitDetail= 
        await PollingUnitDetails.find({pollingunit_id:unit_id});
            console.log(pollingUnitDetail[0]);
            const id = mongoose.Types.ObjectId(pollingUnitDetail[0]._id);
       const pollingUnit = await PollingUnit.find({pollingunitdetail_id: id});
        res.status(200).json(pollingUnit);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.getLocalGovtResullt = async( req, res, next) =>{
    try{
        const {lga_id} = req.body;
        const lga = await LGA.find({lga_id:lga_id})
        // console.log(lga[0]._id)
        const id = lga[0]._id;
        const lgares = await PollingUnit.find({lga_id:id});
        
            let result = 0;
            for(i=0; i <= lgares.length-1; i++){
                    if(lgares[i].party == req.body.party){
                        result+=lgares[i].result;   
                    }
                   
            }
                    console.log(result);
                    res.status(200).json("result for the party is "+result)
        ;
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}