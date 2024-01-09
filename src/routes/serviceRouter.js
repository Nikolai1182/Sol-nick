const { Router } = require("express");
const renderTemplate = require("../lib/renderTemplate");
const Service = require("../views/Services");

const serviceRouter = new Router();

serviceRouter.get("/", (req, res) => {
  renderTemplate(Service, {}, res);
});

module.exports = serviceRouter;
