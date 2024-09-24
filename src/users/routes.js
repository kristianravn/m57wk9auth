const {Router} = require("express");
userRouter = Router();

const { addUser } = require("./controllers");
const {hashPass} = require("../middleware/auth");
userRouter.post("/users/signup",hashPass, addUser);

module.exports = userRouter;