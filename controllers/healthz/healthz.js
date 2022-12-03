const healthz = async (_, res) => {
	res.status(200).json();
};

module.exports = healthz;
