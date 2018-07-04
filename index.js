'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

//app.set('port',(process.env.PORT || 5000))
let port = process.env.PORT || 1299;
let host = '0.0.0.0';
//Allows to process data
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

//ROUTES
app.get('/',function(req,res)
{
	res.send("Hi Iam a chatbot")
})

//FACEBOOK
app.get('/webhook/',function(req,res)
{
	if(req.query['hub.verify_token'] === "Msrapp")
	{
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong Token")
})

//Listening the requests
app.listen(port,host,function(){
	console.log("running: port",port);
})
