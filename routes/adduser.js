const express = require('express');
const userID = require('uniqid');
const fileSvc = require('fs');

const addUserRouter = express.Router();

const { getUserData } = require('../utilities.js');

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
	fileSvc.writeFile('../data/adduser.json', JSON.stringify(allUsers));
});

module.exports = addUserRouter;
