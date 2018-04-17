var express=require('express');

var router=express.Router();

var AdminInvoice=require('../models/AdminInvoice');



router.get('/AddAdminInvoice',function(req,res){

var admininvoice=new AdminInvoice();





admininvoice.CustomerName=req.body.CustomerName,

admininvoice.InvoiceId=req.body.InvoiceId,

admininvoice.TransactionNumber==req.body.TransactionNumber,

admininovice.Time=req.body.Time,

admininvoice.Date=req.body.Date,

admininvoice.CartonId=req.body.CartonId,

admininvoice.PaletteId=req.body.PaletteId,

admininvoice.RackId=req.body.RackId

admininovice.save().then(function(data){

res.status(200).send(data);

},function(err){



res.status(400).send(err);

});

});

module.exports=router;



