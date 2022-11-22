const State = require('../../model/State');

  exports.createState = async( req, res, next)=>{
    try{ State.create({
        state_id: req.body.state_id,
        state_name: req.body.state_name
     })
     console.log('successful');
     res.status(200).json('state created successfully');
  }catch(err){
    console.log(err);
    res.status(400).json("an error has occured")
  } 
 }