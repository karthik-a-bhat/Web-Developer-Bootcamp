var express = require('express');
var app = express();

var request = require('request');

//Set default view engine to Embedded JS
app.set("view engine", "ejs");

//GET request to root calls search.ejs file
app.get("/", function(req,res){
	
	res.render("search");
	
});

//GET request to /results makes a request to OMDB API with the search term
//The JSON returned is then parsed, and sent to the results page. 
app.get("/results", function(req,res){
	
	var searchTerm = req.query.search;
	var url= "http://www.omdbapi.com/?s="+searchTerm+"&apikey=thewdb";
	
	request(url, function(error, response, body){
		if(!error && response.statusCode===200){
			var data = JSON.parse(body);
			res.render("results", {data:data});
			
		}
	});
	
});


//Start the server and listen on PORT 3000
app.listen(3000,function(){
	console.log("Server listening");
});
