import { GET_DOCTORS, DOCTORS_ERROR,LOGIN } from '../Types'
import axios from 'axios'

export const getDoctors = () => async dispatch => {

    try {
        const res = await axios.get(`http://localhost:8000/doctors`)
        dispatch({
            type: GET_DOCTORS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: DOCTORS_ERROR,
            payload: console.log(e),
        })
    }

}
export const Login = ({ Email, Password }) => async dispatch => {
    try {
        const res = axios.post('http://localhost:8000/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Email, Password }),
        })
        dispatch({  
            type: LOGIN,
            payload: res.data
        })

    } catch (error) {

    }

}