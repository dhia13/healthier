import { GET_DOCTORS, LOGIN, CHANGE_SEARCH_COMMUNE, CHANGE_SEARCH_BRANCHE, CHANGE_SEARCH_WORD, SHOW_COMMUNE, HIDE_COMMUNE } from '../Types'

const initialState = {
    Doctors: [{
        Name: '',
        Age: '',
        Speciality: '',
        ImageLink: '',
        Adress: '',
        Location: '',
        Commune: '',
        PhoneNumber: '',
        Studies: '',
        AboutMe: ''
    }]
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_DOCTORS:
            return {
                ...state,
                Doctors: action.payload
            }
        default: return state
    }

}