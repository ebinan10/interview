const LGA = require('../../model/LGA')

exports.createLga = async(req, res, next) =>{
   try{ 
    const {lga_id, lga_name,party,result} =req.body
    await LGA.create({
        lga_id: lga_id,
        lga_name: lga_name,
        party: party,
        result: result

    })
    console.log("successful");
    res.status(200).json( `${party} result for ${lga_name} LGA is created successfully`);
}
catch(err){
    console.log(err);
    res.status(400).json("an error has occured")
}
}