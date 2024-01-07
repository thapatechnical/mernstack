const express = require("express");
const services = require("../controllers/service-controller");
const router = express.Router();

router.route("/service").get(services);

module.exports = router;
