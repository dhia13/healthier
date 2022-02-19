import { LOGIN,LOGOUT,REGISTER } from '../Types'
const LocalStorage = JSON.parse(window.localStorage.getItem('UserInfo'));
const initialState = (LocalStorage)?{...LocalStorage}:{
    Parameters: {
        Loading: true,
        Logged: false
    },
    UserData: {
        DarkMode: '',
        Language: '',
        Firstname: '',
        Lastname: '',
        Birthdate: '',
        Username: '',
        Email: '',
        isAdmin: false,
        ImageLink: '',
        Adress: '',
        PhoneNumber: '',
        Studies: '',
        AboutMe: ''
    }
}
export default function (state = initialState, action) {
    switch (action.type) {

        case LOGIN:
            return {
                ...state.LocalStorage,
                UserData: action.payload,
                Parameters: { Logged: true }
            }
        case LOGOUT:
            return {
                ...state.LocalStorage,
                UserData:'',
                Parameters:{Logged: false}
            }
        case REGISTER:
            return{
                ...state.LocalStorage,
                UserData:action.payload,
                Parameters:{Logged:true}
            }
        default: return state
    }
}