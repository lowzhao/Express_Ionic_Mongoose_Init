const express = require('express');
const router = express.Router();
const path = require('path');
module.exports = router




/// backend

.use('/standard',require('./route/standard'))

/// frontend
.use(express.static(__dirname + '/www'))
.get('*', (req, res, next)=>{
	res.sendFile(path.join(__dirname,'/www/index.html'));
}) 

; 