const { createLogger, format, transports } = require("winston");
const { timestamp, printf, json, combine, colorize, splat } = format;

const logFormat = printf(({ timestamp, level, message, stack }) => {
  return `${timestamp} - [${level}] : ${stack || message}`;
});

const logger = createLogger({
  level: "debug",
  format: combine(json(), timestamp(), format.errors({ stack: true })),
  // defaultMeta: { service: 'pw-rest-api' },
  exitOnError: false,
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new transports.File({ filename: "./logs/error.log", level: "error" }),
    new transports.File({ filename: "./logs/combined.log" }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.metadata({
          fillExcept: ["message", "level", "timestamp", "label"],
        }),
        logFormat
      ),
    })
  );
}

module.exports = logger;
