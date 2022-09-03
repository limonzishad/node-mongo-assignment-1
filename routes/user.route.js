const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/all").get(userController.getAllUsers);

router.route("/random").get(userController.getRandomUser);

router.route("/save").post(userController.postUser);

router.route("/update/:id").patch(userController.patchUser);

router.route("/bulk-update").patch(userController.patchBulkUser);

router.route("/delete/:id").delete(userController.deleteUser);

module.exports = router;