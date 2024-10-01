const {Router} = require("express");
userRouter = Router();

const { addUser,login, findUser,getAllUsers,deleteUser} = require("./controllers");
const {hashPass, comparePass} = require("../middleware/auth");

// user signup
userRouter.post("/users/signup",hashPass, addUser);

// user login
userRouter.post("/users/login", comparePass,login);

// find user
userRouter.get("/users/finduser/:name", findUser);

// get all users
userRouter.get("/users/getallusers", getAllUsers);

// delete user
// userRouter.delete("/user/deleteusername",deleteUser);

module.exports = userRouter;