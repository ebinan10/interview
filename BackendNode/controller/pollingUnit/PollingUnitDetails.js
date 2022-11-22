const PollingUnitDetail = require('../../model/PollingUnitDetails');

exports.unitInfo = async ( req, res, next) =>{
   try {
    const {unit_id, unit_name, unit_address} = req.body
    await PollingUnitDetail.create({
        pollingunit_id: unit_id,
        pollingunit_name: unit_name,
        pollingunit_address: unit_address
    })
    res.status(200).json('polling unit info created successfully');
}
catch(err){
    console.log(err);
    res.status(400).json(" an error has occured")
}
}