const Joi = require("joi");
const { Sequelize } = require("sequelize");

module.exports = {
  model: (sequelize, type) => {
    return sequelize.define("user", {
      id: {
        type: type.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      uniqueId: {
        type: type.STRING,
        allowNull: false,
        unique: true,
      },
      firstname: {
        type: type.STRING,
        allowNull: false,
      },
      lastname: {
        type: type.STRING,
        allowNull: false,
      },
      email: {
        type: type.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: type.STRING,
        allowNull: true,
      },
      isRegistered: {
        type: type.BOOLEAN,
        defaultValue: false,
      },
      badgeGenerated: {
        type: type.BOOLEAN,
        defaultValue: false,
      },
    });
  },
  api: {
    delete: {
      isAllowed: true,
      roles: [],
    },
    put: {
      isAllowed: true,
      roles: [],
    },
    get: {
      isAllowed: true,
      roles: [],
    },
    post: {
      isAllowed: true,
      roles: [],
    },
  },
  validateSchema: {
    register: Joi.object({
      email: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    }),
    verify: Joi.object({
      uniqueId: Joi.string().required(),
    }),
    patch: Joi.object({
      email: Joi.forbidden(),
      firstname: Joi.forbidden(),
      lastname: Joi.forbidden(),
      uniqueId: Joi.optional(),
      id: Joi.forbidden(),
      image: Joi.string().optional(),
      badgeGenerated: Joi.boolean().optional(),
    }),
  },
};
