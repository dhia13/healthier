import { GET_DOCTORS, DOCTORS_ERROR} from '../Types'
import axios from 'axios'

export const getDoctors = (Commune) => async dispatch => {

    try {
        if(Commune){
        const res = await axios.get(`http://localhost:8000/doctor?Commune=${Commune}`)
            
        dispatch({
            type: GET_DOCTORS,
            payload: res.data,
        })}
        else{
            const res = await axios.get(`http://localhost:8000/doctor`)
            
            dispatch({
                type: GET_DOCTORS,
                payload: res.data
        })
    }

    }
    catch (e) {
        dispatch({
            type: DOCTORS_ERROR,
        })
    }

}
