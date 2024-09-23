const {Router} = require("express");
userRouter = Router();

const { addUser } = require("./controllers");

userRouter.post("/users/signup", addUser);

module.exports = userRouter;