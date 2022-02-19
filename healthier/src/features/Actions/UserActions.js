import { LOGIN,LOGIN_ERROR} from '../Types'
import axios from 'axios'

export const  LoginAction = (Email,Password) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:8000/login',{Email,Password},
        {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          })
        dispatch({
            type: LOGIN,
            payload: res.data,
            Paramaters:{logged:true}
        })
    } catch (e){
        dispatch({
            type: LOGIN_ERROR
        })}
}
