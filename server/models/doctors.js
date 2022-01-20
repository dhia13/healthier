import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
        Name : String,
        Age : String,
        Speciality : String,
        imageLink : String,
        Adress : String,
        Commune:String, 
        Location: String,
        PhoneNumber : String,
        Studies : String
})
const Doctor= mongoose.model('Doctor',doctorSchema);
export default Doctor;