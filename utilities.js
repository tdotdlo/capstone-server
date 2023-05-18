const express = require('express');
const fileSvc = require('fs');

const data = './data/svcprovider.json';

const getSvcProvider = () => {
	const allSvcProviders = fileSvc.readFileSync(data);
	const convertedFile = JSON.parse(allSvcProviders);

	return convertedFile;
};

const specialists = (res, provider) => {
	return res.status(200).send(provider);
};

module.exports = { getSvcProvider, specialists };
