const HttpStatus = {
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  AMBIGUOUS: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  I_AM_A_TEAPOT: 418,
  UNPROCESSABLE_ENTITY: 422,
  RESOURCE_LOCK: 423,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
};

const ErrorSchema = {
  status: null,
  name: null,
  message: null,
  body: null,
  stack: null,
};

const HttpErrors = {
  BadRequest(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.BAD_REQUEST;
    ErrorSchema.name = "BAD_REQUEST";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  Unauthorized(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.UNAUTHORIZED;
    ErrorSchema.name = "UNAUTHORIZED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  PaymentRequired(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.PAYMENT_REQUIRED;
    ErrorSchema.name = "PAYMENT_REQUIRED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  Forbidden(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.FORBIDDEN;
    ErrorSchema.name = "FORBIDDEN";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  NotFound(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.NOT_FOUND;
    ErrorSchema.name = "NOT_FOUND";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  MethodNotAllowed(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.METHOD_NOT_ALLOWED;
    ErrorSchema.name = "METHOD_NOT_ALLOWED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  NotAcceptable(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.NOT_ACCEPTABLE;
    ErrorSchema.name = "NOT_ACCEPTABLE";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  ProxyAuthenticationRequired(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.PROXY_AUTHENTICATION_REQUIRED;
    ErrorSchema.name = "PROXY_AUTHENTICATION_REQUIRED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  RequestTimeout(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.REQUEST_TIMEOUT;
    ErrorSchema.name = "REQUEST_TIMEOUT";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  Conflict(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.CONFLICT;
    ErrorSchema.name = "CONFLICT";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  Gone(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.GONE;
    ErrorSchema.name = "GONE";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  LengthRequired(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.LENGTH_REQUIRED;
    ErrorSchema.name = "LENGTH_REQUIRED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  PreconditionedFailed(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.PRECONDITION_FAILED;
    ErrorSchema.name = "PRECONDITION_FAILED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  PayloadTooLarge(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.PAYLOAD_TOO_LARGE;
    ErrorSchema.name = "PAYLOAD_TOO_LARGE";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  UriTooLong(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.URI_TOO_LONG;
    ErrorSchema.name = "URI_TOO_LONG";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  UnsupportedMediaType(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.UNSUPPORTED_MEDIA_TYPE;
    ErrorSchema.name = "UNSUPPORTED_MEDIA_TYPE";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  RequestedRangeNotSatisfiable(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE;
    ErrorSchema.name = "UNSUPPORTED_MEDIA_TYPE";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  ExpectionFailed(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.EXPECTATION_FAILED;
    ErrorSchema.name = "EXPECTATION_FAILED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  Teapot(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.I_AM_A_TEAPOT;
    ErrorSchema.name = "I_AM_A_TEAPOT";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  Unprocessable(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.UNPROCESSABLE_ENTITY;
    ErrorSchema.name = "UNPROCESSABLE_ENTITY";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  ResourceLock(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.RESOURCE_LOCK;
    ErrorSchema.name = "RESOURCE_LOCK";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  TooManyRequests(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.TOO_MANY_REQUESTS;
    ErrorSchema.name = "TOO_MANY_REQUESTS";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  InternalError(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.INTERNAL_SERVER_ERROR;
    ErrorSchema.name = "INTERNAL_SERVER_ERROR";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  NotImplemented(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.NOT_IMPLEMENTED;
    ErrorSchema.name = "NOT_IMPLEMENTED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  BadGateway(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.BAD_GATEWAY;
    ErrorSchema.name = "BAD_GATEWAY";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  ServiceUnavailable(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.SERVICE_UNAVAILABLE;
    ErrorSchema.name = "SERVICE_UNAVAILABLE";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  GatewayTimeout(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.GATEWAY_TIMEOUT;
    ErrorSchema.name = "GATEWAY_TIMEOUT";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },

  HttpVersionNotSupported(message = "", body = {}) {
    ErrorSchema.status = HttpStatus.HTTP_VERSION_NOT_SUPPORTED;
    ErrorSchema.name = "HTTP_VERSION_NOT_SUPPORTED";
    ErrorSchema.message = message;
    ErrorSchema.body = body;
    return ErrorSchema;
  },
};

const responseFormatter = (
  status = null,
  data = null,
  page = null,
  size = null,
  total = null
) => {
  const response = {
    data,
    status,
    page,
    size,
    total,
  };
  status === null ? delete response.status : response;
  data === null ? delete response.data : response;
  page === null ? delete response.page : response;
  size === null ? delete response.size : response;
  total === null ? delete response.total : response;
  return response;
};

const responseHandler = (handler) => {
  return async (req, res, next) => {
    try {
      const result = await handler(req, res, next);
      res.status(200).send(result);
    } catch (err) {
      next(err);
    }
  };
};

const errorFormatter = (err) => {
  let error;

  if (err.status) {
    return err;
  }

  if (err.code && err.code === 11000) {
    error = HttpErrors.Conflict();
    error.message = err.message;
    return error;
  }

  if (err.code && err.code === "LIMIT_UNEXPECTED_FILE") {
    error = HttpErrors.BadRequest(
      "Invalid file key field passed while uploading file"
    );
    return error;
  }

  if (err.stack.match(/ValidationError/gi)) {
    error = HttpErrors.PreconditionedFailed("Schema validation failed");
    error.stack = err.message || err.stack;
    return error;
  }

  const httpError = httpErrorHandler(err);

  if (httpError) {
    return httpError;
  }
  error = HttpErrors.InternalError();
  error.message = err.message || "";
  error.stack = err.stack;
  error.body = err;
  return error;
};

const httpErrorHandler = (err) => {
  let error;
  if (err.response) {
    error.stack = err.response.data;
    error.status = err.response.status;
    error.name = "http_response_error";
    error.message = "Internal API response resulted in failure";
    return error;
  }
  if (err.request) {
    error = HttpErrors.Unprocessable();
    error.name = "http_request_error";
    error.message = "Internal API request resulted in failure";
    return error;
  }
  return null;
};

const validateRequest = (schema = null, payload) => {
  if (schema === null) {
    return true;
  } else {
    const { error } = schema.validate(payload);
    if (error == null) {
      return true;
    } else {
      throw HttpErrors.InternalError(error.details[0].message);
    }
  }
};

module.exports = {
  HttpStatus,
  HttpErrors,
  responseHandler,
  responseFormatter,
  errorFormatter,
  validateRequest,
};
