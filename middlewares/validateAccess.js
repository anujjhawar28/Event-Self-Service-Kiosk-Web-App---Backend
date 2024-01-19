const { HttpErrors } = require("../config/constants");
const { sequelize } = require("../models");
const authorize = require("./authorize");

module.exports = () => {
  return (req, res, next) => {
    if (!sequelize.models.hasOwnProperty(req.params.model)) {
      throw HttpErrors.BadRequest("Not allowed to access resource.");
    }
    const { api } = require("../models/" + req.params.model);
    if (!api) {
      authorize([])(req, res, next);
    } else {
      const method = api[req.method.toLowerCase()];
      if (!method.isAllowed) {
        throw HttpErrors.MethodNotAllowed("Not allowed to access this method.");
      } else {
        authorize([...method.roles])(req, res, next);
      }
    }
  };
};
