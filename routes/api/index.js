const authRouter = require("./auth");
const transactionsRouter = require("./transactions");
const healthzRouter = require("./healthz");

module.exports = { authRouter, transactionsRouter, healthzRouter };
