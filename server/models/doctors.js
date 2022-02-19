import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
        Name: String,
        Age: String,
        Branche: String,
        Email:String,
        CoverImg:String,
        imageLink: String,
        Adress: String,
        Commune:String, 
        Location: String,
        Description:String,
        Followers:Array,
        PhoneNumber: String,
        Studies: String
})
const Doctor= mongoose.model('Doctor',doctorSchema);
export default Doctor;