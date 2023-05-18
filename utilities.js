const fileSvc = require('fs');

const allSpecialists = './data/svcprovider.json';
const userData = './data/adduser.json';

const getSvcProvider = () => {
	const allSvcProviders = fileSvc.readFileSync(allSpecialists);
	const convertedFile = JSON.parse(allSvcProviders);

	return convertedFile;
};

const specialists = (res, provider) => {
	return res.status(200).send(provider);
};

const getUserData = () => {
	const allUserData = fileSvc.readFileSync(userData);
	// const convertedUser = JSON.parse(allUserData);

	// console.log

	return allUserData;
};

module.exports = { getSvcProvider, specialists, getUserData };
