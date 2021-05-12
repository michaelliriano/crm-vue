  
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk')
const app = express();
const pack = require('./package.json');
const path = require('path');
mode = process.env.NODE_ENV || 'dev';
// mode can be access anywhere in the project
const config = require('config').get(mode);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// use only when you want to see the metric related to express app
// app.use(require('express-status-monitor')());

// require('./routes')(app);
const dir = path.join(__dirname, 'assets');
app.use('/upload', express.static(dir));


const start = () => (
  app.listen(config.port, () => {
    console.log(chalk.yellow('.......................................'));
    console.log(chalk.green(config.name));
    console.log(chalk.green(`Port:\t\t${config.port}`));
    console.log(chalk.green(`Mode:\t\t${config.mode}`));
    console.log(chalk.green(`App version:\t${pack.version}`));
    // console.log(chalk.green("database connection is established"));
    // console.log(chalk.yellow('.......................................'));
  })
);
start();