const express = require("express");

const healthz = require("../../controllers/healthz/healthz");

const router = express.Router();

// user register route

// route user get session info by token
router.get("/healthz", healthz);

module.exports = router;
