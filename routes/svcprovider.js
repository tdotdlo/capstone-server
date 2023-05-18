const express = require('express');

const svcProviderRouter = express.Router();

const { getSvcProvider, specialists } = require('../utilities.js');

svcProviderRouter.route('/services/:id').get((req, res) => {
	const requestedSvc = req.params.id;
	const allSvcProviders = getSvcProvider();

	const specificSvcProviders = allSvcProviders.filter(
		(svcProvider) => svcProvider.service === requestedSvc
	);

	switch (requestedSvc) {
		case 'hairstylist':
			specialists(res, specificSvcProviders);
			break;
		case 'barber':
			specialists(res, specificSvcProviders);
			break;
		case 'makeup':
			specialists(res, specificSvcProviders);
			break;
		case 'eyelashes':
			specialists(res, specificSvcProviders);
			break;
		case 'manicure':
			specialists(res, specificSvcProviders);
			break;
		case 'pedicure':
			specialists(res, specificSvcProviders);
			break;
		case 'waxing':
			specialists(res, specificSvcProviders);
			break;
		case 'facial':
			specialists(res, specificSvcProviders);
			break;
		case 'massage':
			specialists(res, specificSvcProviders);
			break;
		default:
			'Not available';
	}
});

module.exports = svcProviderRouter;
