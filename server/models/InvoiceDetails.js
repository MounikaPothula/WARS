var mongoose = require ('mongoose');

var InvoiceDetailsSchema = new mongoose.Schema({
	
	CustomerName:String,
	ProductName:String,
	InvoiceId:String,
	ItemId:String,
	Time:String,
	Date:String,
	TransactionId:String
});
module.exports = mongoose.model('InvoiceDetails',InvoiceDetailsSchema);