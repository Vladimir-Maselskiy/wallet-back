const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { createError } = require("../../helpers");

const healthz = async (_, res) => {
	res.status(200);
};

module.exports = healthz;
