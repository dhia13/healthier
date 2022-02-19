import Doctor from '../Models/doctors.js'
// get list of all the doctors
const getDoctors = async (req, res) => {
    try {
        const doctor = await Doctor.find();
        res.status(200).json(doctor)
    } catch (error) {
        res.status(404).json({ messages: error.messages });
    }
};
//get doctor by index 
const getDoctorsIndex = async (req, res) => {
    try {
        const { page = 1, limit = 20,Commune='',Branche=''} = req.query;
        if (req.query.Commune) {
            let Doctors = await Doctor.find({Commune:Commune}).limit(limit * 1).skip((page - 1) * limit)
            res.status(200).json(Doctors)
            if(req.query.Branche){
                let Doctors = Doctors.filter({Branche:Branche})
            }
        }else if (req.query.Branche){
            let Doctors = await Doctor.find({Branche:Branche}).limit(limit * 1).skip((page - 1) * limit)
            res.status(200).json(Doctors)
        }
        else{
        let Doctors = await Doctor.find().limit(limit * 1).skip((page - 1) * limit)
        res.status(200).json(Doctors)}
    } catch (error) {
        res.status(404).json({ messages: error.messages });
    }
}
// get a doctor by id
const getDoctor = async (req, res) => { 
    try {
        const { id: doctorID } = req.params
        const doctor = await Doctor.findOne({ _id: doctorID })
        if (!doctor) {
            return res.status(404).json({ error: 'doctor do not exist' })
        }
        res.status(200).json({ doctor })
    } catch (error) {
        res.status(404).json({ messages: error.messages });
    }
}
// create a doctor
const createDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body)
        res.status(201).json({ doctor }).json('doctor added')

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
// update a doctor by id 
const updateDoctor = async (req, res) => {
    try {
        const { id: doctorID } = req.params
        const doctor = await Doctor.findOneAndUpdate({ _id: doctorID }, req.body, { new: true, runValidators: true, })
        res.status(200).json({ id: doctorID, data: req.body })
        if (!doctor) { return res.status(404).json("doctor is not found") }
        res.status(200).json({ doctor })
    } catch (error) {
        res.status(404).json({ messages: error.messages });
    }
}
// delete a doctor by id 
const deleteDoctor = async (req, res) => {
    try {
        const { id: doctorID } = req.params
        const doctor = await Doctor.findOneAndDelete({ _id: doctorID })
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor do not exist' })
        }
        res.status(200).json({ msg: 'Doctor deleted' }).json({ doctor })
    } catch (error) {
        res.status(501).json({ messages: error.messages });
    }
}
export { getDoctors, createDoctor, updateDoctor, deleteDoctor, getDoctor, getDoctorsIndex }