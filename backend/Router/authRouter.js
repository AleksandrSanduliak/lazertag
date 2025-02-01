const express = require("express");
const authRouter = express.Router();
const UserController = require("../Controller/UserController");

authRouter.post("/register", UserController.register);
authRouter.post("/login", UserController.login);
authRouter.post("/logout", UserController.logout);
authRouter.get("/refresh", UserController.refresh);
authRouter.get('/activate/:link', UserController.activate);

module.exports = authRouter;