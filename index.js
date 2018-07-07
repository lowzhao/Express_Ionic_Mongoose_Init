const express = require('express');
const app = express();


/// AID
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json()); // to turn request into JSON

const cors = require('cors');
app.use(cors()); // to prevent resource error





/// DEV
const morgan = require('morgan');
app.use(morgan('dev')); // to show request

require('dotenv').config();


/// ROUTING
const route = require('./route');
app.use("/",route);





/// DATABASE
const mongoose = require('mongoose');
mongoose.connect(process.env.mongodb, {
	'ssl': true,
	'replicaSet': 'Cluster0-shard-0',
	'authSource': 'admin'
}).then(
	()=>{
		console.log('Database Connected!');
	},(err)=>{
		console.log(err);
	}
);


/// START
const http = require('http');


http.createServer(app).listen(process.env.PORT | 3001);
console.log('Server created at: ' + (process.env.PORT | 3001));









