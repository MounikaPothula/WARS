var express=require('express');

var router=express.Router();

//var sequenceGenerator = require('mongoose-sequence-plugin');

var Invoice=require('../models/InvoiceDetails');



router.post('/AddInvoiceDetails',function(req,res){

	 /*function (err, result) {   //sequence generation
        if (err) {
            console.error(err);
        } else {
            console.log(result);
            db.InvoiceDetails('test').insert(result, function (err, doc) {
                console.log(err); 
            });
        }
    });

});

app.get('/Invoicelist/:InvoiceId', function (req, res) {
    var InvoiceId = req.params.InvoiceId;
    console.log(InvoiceId);
    db.InvoiceDetails('test').findOne({_InvoiceId: mongojs.ObjectId(InvoiceId)}, function (err, doc) {
        
    });
});*/



/*var InvoiceDetailsSchema = new Schema({
    InvoiceId: {
        type: String
    }
});

InvoiceDetailsSchema.plugin(sequenceGenerator, {
    field: 'code',
    startAt: '99-ZX',
    prefix: 'MNH-',
    maxSaveRetries: 2
});*/

var invoice=new Invoice();



invoice.CustomerName=req.body.CustomerName,

invoice.ProductName=req.body.ProductName,

invoice.InvoiceId=req.body.InvoiceId,

invoice.ItemId=req.body.ItemId,

invoice.Time=req.body.Time,

invoice.Date=req.body.Date,

invoice.TransactionId=req.body.TransactionId

invoice.save().then(function(data){

res.status(200).send(data);

},function(err){



res.status(400).send(err);

});

});




module.exports=router;



