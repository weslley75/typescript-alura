/* Código simplório, apenas para fornecer o serviço para a aplicação */

var express = require("express"),
  app = express(),
  routes = require("../app/routes");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

routes(app);

module.exports = app;
