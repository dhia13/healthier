import express from 'express';
const userRoutes =express.Router();
import {verifyTokenAndAuthorization,verifyTokenAndAdmin} from '../Routes/verifyToken.js'
import {UpdateAccount,DeleteAccount,GetUser,GetAllUsers} from '../Controllers/user.js'

  //UPDATE
  userRoutes.put("/:id", verifyTokenAndAuthorization, UpdateAccount);
  
  //DELETE
  userRoutes.delete("/:id", verifyTokenAndAuthorization,DeleteAccount);
  
  //GET USER
  userRoutes.get("/find/:id", verifyTokenAndAdmin,GetUser);
  
  //GET ALL USER
  userRoutes.get("/", verifyTokenAndAdmin,GetAllUsers);
  
export default userRoutes;