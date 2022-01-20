import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema(
  {
    Firstname: {
      type: String,
      required: [true, 'please enter your first name']
    },
    Lastname: {
      type: String,
      required: [true, 'please enter your last name']
    },
    Birthdate: {
      type: Date,
      required: [true, 'please enter your birthdate']
    },
    Username: {
      type: String,
      required: [true, 'please enter a user name'],
      unique: [false, 'username already taken']
    },
    Email: {
      type: String,
      unique: true,
      required: [true, 'please provide a email']    
    },
    Password: {
      type: String,
      required:[true,'please enter valid password'],
      // select: false
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User