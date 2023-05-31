'use strict';

const express = require('express');

// Constants
const PORT = 8000;
const HOST = 'localhost';

// App
const app = express();
app.set('trust proxy');

app.get('/', (req, res) => {
	// get requested ip address
	var ip = req.headers['x-forwarded-for'];
	console.log('Hello World from docker', ip);
	res.send(`Hello World from docker ${ip}`);
});

app.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}`);
});
