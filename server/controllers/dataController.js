const data = require("../data/data");

module.exports.sendData = async (req, res, next) => {
  res.json(data.data);
};
