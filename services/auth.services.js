const { HttpErrors } = require("../config/handler");
const { user } = require("../models/index.js");
const { logger } = require("../util");
const { randomCaseString } = require("make-random");

module.exports = {
  register: async (req) => {
    try {
      const isUserExist = await user.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (isUserExist) {
        throw HttpErrors.InternalError("User already exist.");
      }
      const payload = {
        ...req.body,
        uniqueId: await randomCaseString(10),
        isRegistered: true,
      };
      return await user.create(payload);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  },

  verify: async (req) => {
    try {
      const isUserExist = await user.findOne({
        where: {
          uniqueId: req.body.uniqueId,
          isRegistered: true,
        },
      });
      if (!isUserExist) {
        throw HttpErrors.InternalError(
          "User is not registered. please register from walk in section."
        );
      }
      return isUserExist;
    } catch (err) {
      logger.error(err);
      throw err;
    }
  },

  patch: async (req) => {
    try {
      const isUserExist = await user.findOne({
        where: {
          uniqueId: req.body.uniqueId,
          isRegistered: true,
        },
      });
      if (!isUserExist) {
        throw HttpErrors.InternalError(
          "User not found, wrong unique identifier"
        );
      }
      const updatedUser = await user.update(
        { ...isUserExist, ...req.body },
        {
          where: {
            uniqueId: isUserExist.uniqueId,
          },
          returning: true,
        }
      );
      return updatedUser[1][0];
    } catch (err) {
      logger.error(err);
      throw err;
    }
  },
};
