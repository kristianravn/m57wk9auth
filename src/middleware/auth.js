const bcrypt = require("bcrypt");
const User = require("../users/model");
const salt = parseInt(process.env.SALT);

// step 1 : hash the password
// step 2 : replace password on req.body with hash password
//  step 3 : use next()

const hashPass = async (req, res, next) => {
    try {
const hashedPass = await bcrypt.hash(req.body.password, salt);
console.log ("hashpass: ", hashPass);

req.body.password = hashedPass;
next();
    } catch (error) {
        res.status(501).json({message:error.message, error: error});
    }
};


// step 1 find user using username (req.body.username)

const comparePass = async (req, res, next) => {
    try{
        
const user = await User.findOne({where:{username:req.body.userName} });
        
        // step 2 compare the plaintext password with the hashed password on 
        // db req.body.password, user.password

        const match = await bcrypt.compare(password, user.passwordHash);


        // i.e bcrypt.compare() - will return true or false 

        // step 3 if false send response "password does not match" - just if

        // step 4 if true attach user to body

        
        next();
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};



module.exports = {
    hashPass: hashPass,
    comparePass: comparePass,
  
};