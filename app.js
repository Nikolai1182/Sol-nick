require("@babel/register");
require("dotenv").config();

const express = require("express");
const logger = require("morgan");

const path = require("path");
const checkAdmin = require("./src/middlewares/admin");
const homeRouter = require("./src/routes/homeRouter");
const infoRouter = require("./src/routes/infoRouter");
const serviceRouter = require("./src/routes/serviceRouter");
const adminRouter = require("./src/routes/adminRouter");

const PORT = process.env.PORT || 3100;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.use("/", homeRouter);
app.use("/info", infoRouter);
app.use("/Services", serviceRouter);
app.use("/admin", checkAdmin, adminRouter);

// app.use("*", (req, res) => {
//   res.redirect("/");
// });

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
