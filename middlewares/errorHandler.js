const { errorFormatter } = require("../config/constants");
const { logger } = require("../util");

module.exports.errorHandler = (req, res, next) => {
  const error = errorFormatter(new Error());
  error.status = 400;
  next(error);
};

module.exports.errorHandlerAll = function (err, req, res, next) {
  logger.error(err.message);
  res.status(err.status || 500).send(err);
  next();
};
