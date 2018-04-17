var express=require('express');

var router=express.Router();

var Driver=require('../models/DriverDetails');


router.post('/AddDriverDetails',function(req,res){

var driver=new Driver();


driver.GatepassId=req.body.GatepassId,

driver.TruckNumber=req.body.TruckNumber,

driver.DriverName=req.body.DriverName,

driver.DriverId=req.body.DriverId

driver.save().then(function(data){

res.status(200).send(data);

},function(err){

  res.status(400).send(err);

});

});











module.exports=router;