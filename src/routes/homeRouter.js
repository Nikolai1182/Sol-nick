const { Router } = require("express");
const renderTemplate = require("../lib/renderTemplate");
const Home = require("../views/Home");

const homeRouter = new Router();

homeRouter.get("/", (req, res) => {
  renderTemplate(Home, {}, res);
});

module.exports = homeRouter;
