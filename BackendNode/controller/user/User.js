const User = require('../../model/User')

exports.createUser = async(req,res,next)=>
{
    const {userid, user_name,user_email,user_phonenumber} = req.body
   await User.create({userid:userid,
    user_name:user_name, user_email:user_email,
user_phonenumber:user_phonenumber})
    res.status(200).json('user created successfully');
    console.log("successful");
}

exports.getUser = async(req, res, next) =>{
    res.status(200).json('user is logged successfully');
    console.log("user is logged successfully");
} 