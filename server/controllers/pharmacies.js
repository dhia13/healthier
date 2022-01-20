import Pharmacie from '../Models/pharmacies.js'

const getPharmacies = async(res,req)=>{
    try {
        const pharmacie = await Pharmacie.find();
        res.status(200).json(pharmacie)
    } catch (error) {
        res.status(404).json({messages:error.messages})
    }
};
const getPharmacie = async(res,req)=>{
    try {
        const {id:pharmacieID}=req.params
        const pharmacie = await Pharmacie.findOne({_id:pharmacieID})
        if(!pharmacie){
            return res.status(404).json({error:'Pharmacie do not exist'})
        }
        res.status(200).json({pharmacie})
    } catch (error) {
        res.status(404).json({messages:error.messages})        
    }
}
// create pharmacie
const createPharmacie=async(req,res)=>{
    try {
        const pharmacie = await Pharmacie.create(req.body)
        res.status(201).json({doctor}).json('Pharmacie Added')
    } catch (error) {
        res.status(500).json({msg:error})

    }
}
const updatePharmacie = async (req, res) =>{
    try {
        const { id: pharmacieID } = req.params
        const pharmacie = await Pharmacie.findOneAndUpdate({_id: pharmacieID},req.body,{new : true,runValidators:true,})
        res.status(200).json({id:doctorID,data:req.body})
    if(!pharmacie){return res.status(404).json("Pharmacie is not found")}
    res.status(200).json({pharmacie}) 
    } catch (error) {
        res.status(404).json({messages:error.messages});
    }
}
// delete a doctor by id 
const deletePharmacie=async(req,res)=>{
    try {
        const {id:pharmacieID}=req.params
        const pharmacie = await Pharmacie.findOneAndDelete({_id:pharmacieID})
        if (!pharmacie){
            return res.status(404).json({error:'Pharmacie do not exist'})
        }
        res.status(200).json({msg:'Pharmacie deleted'}).json({pharmacie})
    } catch (error) {
        res.status(501).json({messages:error.messages});        
    }
}
export {getPharmacies,createPharmacie,updatePharmacie,deletePharmacie,getPharmacie}