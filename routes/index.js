var path = require("path");

module.exports = function (app, express) {
  app.use("/", express.static("assets/lander"));
  app.get("/", function (req, res) {
    res.sendFile("index.html", { root: "assets/lander" });
  });
  app.use("/account", express.static("assets/app/dist"));
  app.get("/account", function (req, res) {
    res.sendFile("index.html", { root: "assets/app/dist" });
  });

};
