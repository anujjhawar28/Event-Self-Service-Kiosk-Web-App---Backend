const fs = require("fs");
const path = require("path");
const { Router } = require("express");
const { jsonParser } = require("../middlewares/bodyParser");
const basename = path.basename(__filename);
const modules = {};
const router = Router();

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modules[file.split(".")[0]] = require(path.join(__dirname, file));
    router.use(
      `/${file.split(".")[0]}`,
      jsonParser,
      modules[file.split(".")[0]]
    );
  });

module.exports = router;
