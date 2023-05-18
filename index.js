const express = require('express');
const cors = require('cors');

const svcProvider = express();
const svcProviderRoute = require('./routes/svcprovider');

const PORT = 8080;

svcProvider
	.use(express.json())
	.use(cors())
	.use(svcProviderRoute)
	.listen(`${PORT}`, () => {
		console.log(`Server is running on: ${PORT}`);
	});
