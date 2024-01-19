const { URL } = require("../config/constants");
const {
  responseFormatter,
  HttpStatus,
  errorFormatter,
  validateRequest,
} = require("../config/handler");
const { auth } = require("../services");
const { uploadSingle } = require("../util/upload");

module.exports = {
  register: async (req) => {
    try {
      const { validateSchema } = require("../models/user");
      if (validateRequest(validateSchema["register"], req.body)) {
        const response = await auth.register(req);
        return responseFormatter(HttpStatus.OK, response);
      }
    } catch (err) {
      throw errorFormatter(err);
    }
  },

  verify: async (req) => {
    try {
      const { validateSchema } = require("../models/user");
      if (validateRequest(validateSchema["verify"], req.body)) {
        const response = await auth.verify(req);
        return responseFormatter(HttpStatus.OK, response);
      }
    } catch (err) {
      throw errorFormatter(err);
    }
  },

  patch: async (req) => {
    try {
      const { validateSchema } = require("../models/user");
      if (validateRequest(validateSchema["patch"], req.body)) {
        const response = await auth.patch(req);
        return responseFormatter(HttpStatus.OK, response);
      }
    } catch (err) {
      throw errorFormatter(err);
    }
  },

  upload: async (req, res) => {
    uploadSingle(req, res, (err) => {
      if (err) {
        return res.status(422).json({
          status: 422,
          name: "UNPROCESSABLE_ENTITY",
          message: "Uploading failed.",
          body: err,
          stack: null,
        });
      } else {
        if (req.file == undefined) {
          return res.status(422).json({
            status: 422,
            name: "UNPROCESSABLE_ENTITY",
            message: "No file selected.",
            body: {},
            stack: null,
          });
        } else {
          return res.status(200).json({
            data: {
              url: URL + "images/" + req.file.filename,
            },
            status: 200,
          });
        }
      }
    });
  },
};
