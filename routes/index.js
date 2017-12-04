var express = require('express');

/* GET home page. */
exports.displayIndex = function(req, res)
{
	res.render('dashboard');
};

exports.displaySuggestions = function(req, res)
{
	res.render('user');
}