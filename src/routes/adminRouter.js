const { Router } = require("express");
const renderTemplate = require("../lib/renderTemplate");
const Admin = require("../views/Admin");

const adminRouter = new Router();

adminRouter.get("/", (req, res) => {
  renderTemplate(Admin, {}, res);
});

module.exports = adminRouter;
