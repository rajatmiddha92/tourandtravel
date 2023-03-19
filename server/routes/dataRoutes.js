const { sendData } = require("../controllers/dataController");
const router = require("express").Router();

router.get("/", sendData);

module.exports = router;
