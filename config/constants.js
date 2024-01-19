const response = require("./handler");

require("dotenv").config();
const TOKEN_HEADER_KEY = "x-access-token";
const TOKEN_CHECK_FIELD = "roleType";

const userRoles = {
  ADMIN: "ADMIN",
  USER: "USER",
};

const devConfig = {
  JWT_SECRET: process.env.JWT_SECRET_DEV,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET_DEV,
  TOKEN_EXPIRE_IN: process.env.TOKEN_EXPIRE_IN,
  ACCOUNT_TOKEN_EXPIRE_IN: process.env.ACCOUNT_TOKEN_EXPIRE_IN,
  REFRESH_TOKEN_EXPIRE_IN: process.env.REFRESH_TOKEN_EXPIRE_IN,
};

const testConfig = {
  JWT_SECRET: process.env.JWT_SECRET_TEST,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET_TEST,
  TOKEN_EXPIRE_IN: process.env.TOKEN_EXPIRE_IN,
  ACCOUNT_TOKEN_EXPIRE_IN: process.env.ACCOUNT_TOKEN_EXPIRE_IN,
  REFRESH_TOKEN_EXPIRE_IN: process.env.REFRESH_TOKEN_EXPIRE_IN,
};

const prodConfig = {
  JWT_SECRET: process.env.JWT_SECRET_PROD,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET_PROD,
  ACCOUNT_TOKEN_EXPIRE_IN: process.env.ACCOUNT_TOKEN_EXPIRE_IN,
  REFRESH_TOKEN_EXPIRE_IN: process.env.REFRESH_TOKEN_EXPIRE_IN,
};

const defaultConfig = {
  URL:
    "http://" +
    (process.env.APP_URL || "localhost") +
    ":" +
    (process.env.PORT || 3000) +
    "/",
  PORT: process.env.PORT || 3000,
  APP_URL: process.env.APP_URL || "localhost",
  APP_KEY: process.env.APP_KEY,
};

const smtpConfig = {
  FROM: "PRODUCT NAME",
  HOST: process.env.SMTP_HOST,
  PORT: process.env.SMTP_PORT,
  SECURE: process.env.SMTP_SECURE,
  USERNAME: process.env.SMTP_USERNAME,
  PASSWORD: process.env.SMTP_PASSWORD,
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
}

module.exports = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
  ...userRoles,
  ...response,
  SMTP: smtpConfig,
  TOKEN_HEADER_KEY,
  TOKEN_CHECK_FIELD,
  appName: "self-service",
};
