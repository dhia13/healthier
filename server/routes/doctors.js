import express from 'express'
import {getDoctors,getDoctor,updateDoctor,createDoctor,deleteDoctor,getDoctorsIndex} from '../Controllers/doctors.js'

const doctorsRouter=express.Router();

// doctorsRouter.get('/',getDoctors);
doctorsRouter.post('/',createDoctor)
doctorsRouter.get('/:id',getDoctor)
doctorsRouter.patch('/:id',updateDoctor)
doctorsRouter.delete('/:id',deleteDoctor)
doctorsRouter.get('/',getDoctorsIndex)

export default doctorsRouter
