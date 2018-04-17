var mongoose = require ('mongoose');
var AdminInvoiceSchema = new mongoose.Schema({
	CustomerName:String,
	InvoiceId: String,
	TransactionNumber:String,
	Time:String,
	Date:String,
	CartonId:String,
	PaletteId:String,
	RackId:String
});
//AdminInvoiceSchema.plugin(autoIncrement.plugin, 'AdminInvoice');
module.exports = mongoose.model('AdminInvoice',AdminInvoiceSchema);