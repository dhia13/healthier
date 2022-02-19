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
      type: Date
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
    ImageLink:{
      type:String
    },
    Adress:{
      type:String
    },
    PhoneNumber:{
      type:String
    },
    Studies:{
      type:String
    },
    AboutMe:{
      type:String
    },
    Language:{
      type:String
    },
    DarkMode:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User