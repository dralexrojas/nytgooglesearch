const routes = require("./apiroutes");
const router = require("express").Router();


router.use(routes);

module.exports = router