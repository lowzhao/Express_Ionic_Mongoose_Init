// import models
const standard = require('../model/standardModel');

module.exports = require('express').Router()
.get(
	'/:id',
	(req,res,next)=>{
		standard.findById(req.params.id).then(
			(doc)=>{
				res.send(doc);
				console.log(doc);
				next();
			},
			(err)=>{
				res.send(err);
				console.log(err);
				next();
			}
		);
	}
)
.post(
	'/',
	(req,res,next)=>{
		standard.create(req.body).then(
			(doc)=>{
				res.send(doc);
				console.log(doc);
				next();
			},
			(err)=>{
				res.send(err);
				console.log(err);
				next();
			}
		);
	}
)
;