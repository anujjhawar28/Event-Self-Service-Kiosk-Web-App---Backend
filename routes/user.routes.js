const router = require("express").Router();
const AuthController = require("../controller/auth.controller");
const { responseHandler } = require("../config/constants");

router.post("/register", responseHandler(AuthController.register));
router.post("/verify", responseHandler(AuthController.verify));
router.get("/:uniqueId", responseHandler(AuthController.getUserById));
router.patch("/", responseHandler(AuthController.patch));
router.post("/upload-image", AuthController.upload);

module.exports = router;
