import express from 'express'
import {getPharmacies,createPharmacie,updatePharmacie,deletePharmacie,getPharmacie} from '../Controllers/pharmacies.js'

const pharmaciesRouter=express.Router();

pharmaciesRouter.get('/',getPharmacies);
pharmaciesRouter.post('/',createPharmacie)
pharmaciesRouter.get('/:id',getPharmacie)
pharmaciesRouter.patch('/:id',updatePharmacie)
pharmaciesRouter.delete('/:id',deletePharmacie)

export default pharmaciesRouter