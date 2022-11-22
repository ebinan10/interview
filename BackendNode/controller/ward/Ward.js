const mongoose = require('mongoose')
const Ward = require('../../model/Ward');
const User = require('../../model/User');

exports.CreateWard = async(req, res, next) =>{
    try{
        const {ward_id, ward_name,ward_description,party,userid}= req.body
       const user = await User.find({userid:userid})
       const id = mongoose.Types.ObjectId(user._id)
    await Ward.create({
        ward_id:req.body.ward_id,
        ward_name:req.body.ward_name,
        ward_description: req.body.ward_description,
        party: req.body.party,
        userid: id
    })
    res.status(200).json('ward created successfully');
}
catch(err){
    console.log(err);
    res.status(400).json("an error just occured");
}}