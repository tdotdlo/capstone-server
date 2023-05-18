const express = require('express');
const fileSvc = require('fs');

const data = './data/svcprovider.json';

const getSvcProvider = () => {
	const allSvcProviders = fileSvc.readFileSync(data);
	const convertedFile = JSON.parse(allSvcProviders);

	return convertedFile;
};

module.exports = getSvcProvider;
