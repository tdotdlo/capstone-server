const express = require('express');
const userID = require('uniqid');
const fileSvc = require('fs');

const addUserRouter = express.Router();

const { getUserData, writeToFile } = require('../utilities.js');

addUserRouter.route('/adduser').post((req, res) => {
	const userSignup = req.body;

	const userDetails = {
		id: userID(),
		firstname: userSignup.firstname,
		lastname: userSignup.lastname,
		email: userSignup.email,
		address: userSignup.address,
		city: userSignup.city,
		province: userSignup.province,
	};

	const allUsers = getUserData();
	const convertedUsersData = JSON.parse(allUsers);
	convertedUsersData.push(userDetails);
	writeToFile(convertedUsersData);
	res.status(200).send(convertedUsersData);
});

module.exports = addUserRouter;
