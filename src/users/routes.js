const {Router} = require("express");
userRouter = Router();

const { addUser,login } = require("./controllers");
const {hashPass, comparePass} = require("../middleware/auth");

// user signup
userRouter.post("/users/signup",hashPass, addUser);

// user login
userRouter.post("/users/login", comparePass,login);

module.exports = userRouter;