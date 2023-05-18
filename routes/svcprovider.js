const express = require('express');

const svcProviderRouter = express.Router();

const getSvcProvider = require('../utilities.js');

svcProviderRouter.route('/services/:id').get((req, res) => {
	const requestedSvc = req.params.id;
	const allSvcProviders = getSvcProvider();

	const specificSvcProviders = allSvcProviders.filter(
		(svcProvider) => svcProvider.service === requestedSvc
	);

	if (req.params.id === 'hairstylist') {
		res.status(200).send(specificSvcProviders);
	} else {
		res.status(404).send('Not available');
	}
});

module.exports = svcProviderRouter;
