import  mongoose  from "mongoose";
const PharmacieShcema = mongoose.Schema({
    Name:String,
    Commune:String,
    Adress:String,
    ImageLink:String,
    Location:String,
    OnGard:Boolean,
    OpenHours:String

})
const Pharmacie= mongoose.model('Pharmacie',PharmacieShcema)
export default Pharmacie