const User = require("./model");


const addUser = async (req, res) => {
    try{
const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
});
res.status(201).json({messsage: "success", user: req.body.username});

    } catch (error){
        res.status(501).json({message: error.message, error:error});
    }
};

const login = async (req, res) => {
    try {
        res.status(201).json({message: "success", user:User});
    } catch (error) {
        res.status(501).json({message: error.message, error:error});
    }
}
const findUser = async (req,res) => {
    const user = await User.findOne({where:{username:req.params.name}});
    try {
        res.status(200).json({message: "success,you have found this user", finduser: user});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

const getAllUsers = async (req,res) => {
    try{
        const users = await User.findAll();
        res.status(200).json({message: "succcess",users});
    }catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
    
};

const deleteUser = async (req,res) => {
    try {
        const deleteUser = await User.destroy({
            where:{user:req.params.user}
        });

        if (deleteUser) {
            res.status (202).json({message: "success", deleteUser: deleteUser});
        }else{
            res.status(404).json({message:"user not found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};


module.exports = {
    addUser: addUser,
    login: login,
    findUser: findUser,
    getAllUsers: getAllUsers,
    deleteUser: deleteUser,
}