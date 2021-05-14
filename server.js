const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
const app = express();
const pack = require("./package.json");
const path = require("path");
require("./database");
mode = process.env.NODE_ENV || "dev";
const config = require("config").get(mode);
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
require('./routes/index')(app,express)
const start = () =>
  app.listen(config.port, () => {
    console.log(chalk.yellow("......................................."));
    console.log(chalk.green(config.name));
    console.log(chalk.green(`Port:\t\t${config.port}`));
    console.log(chalk.green(`Mode:\t\t${config.mode}`));
    console.log(chalk.green(`App version:\t${pack.version}`));
  });
start();
