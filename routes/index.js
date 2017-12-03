var express = require('express');

/* GET home page. */
exports.displayIndex = function(req, res)
{
	res.render('index');
};