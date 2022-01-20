import User from '../Models/user.js'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
  try {
    // get credridentiels fron req body
    // create new user
    const newUser = await User.create({
      Username: req.body.Username,
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      Email: req.body.Email,
      Birthdate: req.body.Birthdate,
      // hash password
      Password: CryptoJS.AES.encrypt(req.body.Password,process.env.CRY_SEC)
    });
    // new user created
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
}
export const login = async(req,res)=>{
  try {
    // find user by username
    const user = await User.findOne(
      {
        Email:req.body.Email
      }
    )
    // if user doesn't exist
    !user && res.status(404)
    // .json('user doesnt exist')
    // dycrypt password
    const hashedPassword = CryptoJS.AES.decrypt(user.Password,process.env.CRY_SEC);
    const oripassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    const inputPassword = req.body.Password;
    // compare password
    inputPassword !== oripassword && 
        res.status(401).json("Wrong Password");
    const accessToken = jwt.sign(
    {
        id: user._id,
        isAdmin: user.isAdmin,
    },
    process.env.JWT_SEC,
        {expiresIn:"3d"}
    );
    const { Password, ...others } = user._doc;  
    res.status(200).json({...others, accessToken})
}catch(err){
    res.status(500).json(err);
}
};
