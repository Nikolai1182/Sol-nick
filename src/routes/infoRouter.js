const { Router } = require("express");
const renderTemplate = require("../lib/renderTemplate");
const Info = require("../views/Info");

const infoRouter = new Router();

infoRouter.get("/", (req, res) => {
  renderTemplate(Info, {}, res);
});

module.exports = infoRouter;
