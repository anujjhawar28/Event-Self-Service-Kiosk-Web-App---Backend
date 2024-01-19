const express = require("express");
const app = require("express")();
const path = require("path");
const appMiddlewares = require("./middlewares");
// const events = require('events');
const { logger } = require("./util");
require("dotenv").config();

// events.EventEmitter.defaultMaxListeners = 50;
const PORT = process.env.PORT || 3000;

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", express.static(path.join(__dirname, "public")));

appMiddlewares(app);

app.listen(PORT, () => {
  logger.debug(`Server is running on localhost:${PORT}`);
});
