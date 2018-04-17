var express = require ('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
/*Schema = mongoose.Schema,//
    autoIncrement = require('mongoose-auto-increment');/*/
var logger = require('morgan');
var path = require('path');
var userRoute = require('./server/routes/User');
var InvoiceDetailsRoute = require('./server/routes/Invoice');
var DriverDetailsRoute = require('./server/routes/Driver')

// console.log("userRoute::",userRoute); // This code is not required.
app.use(bodyparser.json());//request parsing from html to json
app.use(logger('dev'));//logging client request
app.use(express.static(path.join(__dirname,'/Client')));

console.log("hello");

mongoose.connect('mongodb://localhost:27017/PROJECT');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log('Database Connected');
});

/*autoIncrement.initialize(connection);//

var AdminInvoiceSchema = new Schema({  //
    InvoiceId: { type: Schema.Types.ObjectId, ref: 'InvoiceId' },
    CustomerName: String,
    TransactionNumber: String,
    Date: String,
    Time:String,
});
 
AdminInvoiceSchema.plugin(autoIncrement.plugin, 'PaletteId','CartonId','RackId');
var AdminInvoice = connection.model('AdminInovice', AdminInvoiceSchema);//

*/
app.use('/', userRoute);

app.use('/',InvoiceDetailsRoute);

app.use('/',DriverDetailsRoute);

app.get('/registrationPage', function (req, res) 
{

  res.sendFile(__dirname+'/Client/views/registrationPage.html');

});

app.get('/login',function(req,res)
{
	res.sendFile(__dirname+'/Client/views/login.html');
});



app.get('/Invoice',function(req,res)
{
	res.sendFile(__dirname+'/Client/views/Invoice.html');
});

app.get('/Driver',function(req,res)
{
	res.sendFile(__dirname+'Client/views/Gatepass.html');
});

app.get('/AdminInvoice', function(req,res)
{
	res.sendFile(__dirname+'Client/views/AdminInvoice.html');
});

app.listen(3005,function(req,res){
  console.log('Server is running on port 3005...');
});



