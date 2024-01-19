const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const expressSanitizer = require("express-sanitizer");
const { errorHandler, errorHandlerAll } = require("./errorHandler");
const routes = require("../routes");
require("dotenv").config();

module.exports = (app) => {
  app.use(cors());

  app.use(morgan("dev"));

  app.use(expressSanitizer());

  app.use(helmet.hidePoweredBy({ setTo: "self-service" }));
  app.use(
    helmet.hsts({
      // Must be at least 1 year to be approved
      maxAge: 31536000,
      // Must be enabled to be approved
      includeSubDomains: true,
      preload: true,
    })
  );

  app.use(helmet.xssFilter());
  app.use(helmet.frameguard({ action: "deny" }));

  app.use("/api", routes);

  app.use(errorHandler);
  app.use(errorHandlerAll);
};
