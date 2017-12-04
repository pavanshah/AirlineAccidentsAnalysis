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

exports.getCountryAndCountData = function(req, res)
{
	console.log("getCountryAndCountData");

	var json_responses = {};
	var resultHashMap = {};
	var result = [];
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{Country : 1}).toArray(function(err, data){	//retrive data
			
			if (data) 
			{

				for(var i = 0 ; i < data.length ; i++)
				{
					if(resultHashMap[data[i].Country])
					{
						resultHashMap[data[i].Country]++;
					}
					else
					{
						resultHashMap[data[i].Country] = 1;
						result.push(data[i].Country);
					}
				}

				/*var keySet = Object.keys(resultHashMap);

				for(var j = 0 ; j < keySet.length ; j++)
				{
					var resultObject = {};
					resultObject.label = keySet[j];
					resultObject.value = resultHashMap[keySet[j]]
					result.push(resultObject);
				}*/

				json_responses = result;
				res.send(json_responses);
			} 
			
			else 
			{
				console.log("Error in data");
			}
		});
	});
};

exports.getTimeAndCountData = function(req, res)
{
	console.log("getTimeAndCountData");

	var json_responses = {};
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{EventDate : 1}).toArray(function(err, data){	//retrive data
			
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


exports.getPurposeAndCountData = function(req, res)
{
	console.log("getPurposeAndCountData");

	var json_responses = {};
	var resultHashMap = {};
	var result = [];
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{PurposeOfFlight : 1}).toArray(function(err, data){	//retrive data
			
			if (data) 
			{
				for(var i = 0 ; i < data.length ; i++)
				{
					if(resultHashMap[data[i].PurposeOfFlight])
					{
						resultHashMap[data[i].PurposeOfFlight]++;
					}
					else
					{
						resultHashMap[data[i].PurposeOfFlight] = 1;
					}
				}


				var keySet = Object.keys(resultHashMap);

				for(var j = 0 ; j < keySet.length ; j++)
				{
					var resultObject = {};
					resultObject.label = keySet[j];
					resultObject.value = resultHashMap[keySet[j]]
					result.push(resultObject);
				}

				json_responses = result;
				res.send(json_responses);
			} 
			
			else 
			{
				console.log("Error in data");
			}
		});
	});
};


exports.getAircraftCategoryAndCountData = function(req, res)
{
	console.log("getAircraftCategoryAndCountData");

	var json_responses = {};
	var resultHashMap = {};
	var result = [];
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{AircraftCategory : 1}).toArray(function(err, data){	//retrive data
			
			if (data) 
			{
				for(var i = 0 ; i < data.length ; i++)
				{
					if(resultHashMap[data[i].AircraftCategory])
					{
						resultHashMap[data[i].AircraftCategory]++;
					}
					else
					{
						resultHashMap[data[i].AircraftCategory] = 1;
					}
				}


				var keySet = Object.keys(resultHashMap);

				for(var j = 0 ; j < keySet.length ; j++)
				{
					var resultObject = {};
					resultObject.label = keySet[j];
					resultObject.value = resultHashMap[keySet[j]]
					result.push(resultObject);
				}

				json_responses = result;
				res.send(json_responses);
			} 
			
			else 
			{
				console.log("Error in data");
			}
		});
	});
};


exports.getNumberOfEnginesAndCountData = function(req, res)
{
	console.log("getNumberOfEnginesAndCountData");

	var json_responses = {};
	var resultHashMap = {};
	var result = [];
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{NumberOfEngines : 1}).toArray(function(err, data){	//retrive data
			
			if (data) 
			{
				for(var i = 0 ; i < data.length ; i++)
				{
					if(resultHashMap[data[i].NumberOfEngines])
					{
						resultHashMap[data[i].NumberOfEngines]++;
					}
					else
					{
						resultHashMap[data[i].NumberOfEngines] = 1;
					}
				}


				var keySet = Object.keys(resultHashMap);

				for(var j = 0 ; j < keySet.length ; j++)
				{
					var resultObject = {};
					resultObject.label = keySet[j];
					resultObject.value = resultHashMap[keySet[j]]
					result.push(resultObject);
				}

				json_responses = result;
				res.send(json_responses);
			} 
			
			else 
			{
				console.log("Error in data");
			}
		});
	});
};


exports.getEngineTypeAndCountData = function(req, res)
{
	console.log("getEngineTypeAndCountData");

	var json_responses = {};
	var resultHashMap = {};
	var result = [];

	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{EngineType : 1}).toArray(function(err, data){	//retrive data
			
			if (data) 
			{
				for(var i = 0 ; i < data.length ; i++)
				{
					if(resultHashMap[data[i].EngineType])
					{
						resultHashMap[data[i].EngineType]++;
					}
					else
					{
						resultHashMap[data[i].EngineType] = 1;
					}
				}


				var keySet = Object.keys(resultHashMap);

				for(var j = 0 ; j < keySet.length ; j++)
				{
					var resultObject = {};
					resultObject.label = keySet[j];
					resultObject.value = resultHashMap[keySet[j]]
					result.push(resultObject);
				}

				json_responses = result;
				res.send(json_responses);
			} 
			
			else 
			{
				console.log("Error in data");
			}
		});
	});
};


exports.getBroadPhaseOfFlightAndCountData = function(req, res)
{
	console.log("getBroadPhaseOfFlightAndCountData");

	var json_responses = {};
	var resultHashMap = {};
	var result = [];
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{BroadPhaseOfFlight : 1}).toArray(function(err, data){	//retrive data
			
			if (data) 
			{
				
				for(var i = 0 ; i < data.length ; i++)
				{
					if(resultHashMap[data[i].BroadPhaseOfFlight])
					{
						resultHashMap[data[i].BroadPhaseOfFlight]++;
					}
					else
					{
						resultHashMap[data[i].BroadPhaseOfFlight] = 1;
					}
				}


				var keySet = Object.keys(resultHashMap);

				for(var j = 0 ; j < keySet.length ; j++)
				{
					var resultObject = {};
					resultObject.label = keySet[j];
					resultObject.value = resultHashMap[keySet[j]]
					result.push(resultObject);
				}

				json_responses = result;
				res.send(json_responses);


			} 
			
			else 
			{
				console.log("Error in data");
			}
		});
	});
};


exports.getLatitudeAndLongitudeData = function(req, res)
{
	console.log("getLatitudeAndLongitudeData");

	var json_responses = {};
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll
		
		coll.find({},{Latitude : 1, Longitude : 1}).toArray(function(err, data){	//retrive data
			
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


exports.getSafetySuggestion = function(req, res)
{

	var request_json = req.body;
	console.log("getSafetySuggestion "+request_json);

	var Country = request_json.Country;
	var AirportCode = request_json.AirportCode;
	var Month = request_json.Month;

	var MonthToNumber = {
		"January" : 1,
		"February" : 2,
		"March" : 3,
		"April" : 4,
		"May" : 5,
		"June" : 6,
		"July" : 7,
		"August" : 8,
		"September" : 9,
		"October" : 10,
		"November" : 11,
		"December" : 12

	};

	var MonthNumber = MonthToNumber[Month];

	console.log("Country "+Country);
	console.log("AirportCode "+AirportCode);
	console.log("MonthNumber "+MonthNumber);

	var json_responses = {};
	
	mongo.connect(mongoSessionConnectURL, function(connection){
		console.log('Connected to mongo at: ' + mongoSessionConnectURL);
		var coll = mongo.collection('AirlineData');		//collection data in coll

		coll.find({Country : Country, AirportCode : AirportCode, EventDate : {$regex : "^" + MonthNumber} }).toArray(function(err, data){	//retrive data
			
			if (data) 
			{
				json_responses.value = data.length;
				res.send(json_responses);
			} 
			
			else 
			{
				console.log("Error in data");
			}
		});
	});


}