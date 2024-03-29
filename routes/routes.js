const express = require("express");
const UserController = require("../controllers/userController");
const AuthController = require("../controllers/authController");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

// Authentication routes
router.post("/login", AuthController.login);

router.use(authMiddleware);

router.get("/totalCounts", UserController.getTotalUserCount);

router.post("/bulk-create", UserController.bulkCreateUsers);

router.delete("/delete-all", UserController.deleteAllUsers);

router
  .route("/")
  .post(UserController.createUser)
  .get(UserController.getAllUsers);
router
  .route("/:id")
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .delete(UserController.deleteUserById);


module.exports = router;
