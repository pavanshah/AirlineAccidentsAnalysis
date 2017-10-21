var mongo = require("../routes/mongo");
var mongoSessionConnectURL = "mongodb://pavan:pavan@ds229435.mlab.com:29435/airlineaccidents";

exports.getAllData = function(req, res)
{
	console.log("getAllData");

	var json_responses = {};
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{}).toArray(function(err, data){	//retrive data
			
			if (data) 
			{
				json_responses = {"data" : data};
				res.send(json_responses);
			} 
			
			else 
			{
				console.log("Error in data");
			}
		});
	});

};