const jwt = require("jsonwebtoken");
const {
  HttpErrors,
  TOKEN_HEADER_KEY,
  JWT_SECRET,
  TOKEN_CHECK_FIELD,
} = require("../config/constants");
const { logger } = require("../util");

module.exports = (roles = []) => {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === "string") {
    roles = [roles];
  }
  return (req, res, next) => {
    const token = req.body.userToken || req.headers[TOKEN_HEADER_KEY]; // || req.query.userToken
    if (token) {
      jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if (error) {
          throw HttpErrors.InternalError("Token Expired");
        }
        logger.info(decoded);
        req.tokenData = decoded;
        if (
          roles.length &&
          !roles.some((r) => decoded[TOKEN_CHECK_FIELD].includes(r))
        ) {
          throw HttpErrors.NotAcceptable("Not authroized to access resources");
        }
        next();
      });
    } else {
      throw HttpErrors.BadRequest("Token is Missing");
    }
  };
};
