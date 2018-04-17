var mongoose = require ('mongoose');

var DriverDetailsSchema = new mongoose.Schema({
	
	GatepassId:String,
	TruckNumber:String,
	DriverName:String,
	DriverId:String
});
module.exports = mongoose.model('DriverDetails',DriverDetailsSchema);