import { combineReducers } from 'redux'
import DoctorReducer from './DoctorReducer'
import UserReducer from './UserReducer'
import InterfaceReducer from './InterfaceReducer'
export default combineReducers({
    DoctorReducer,
    UserReducer,
    InterfaceReducer
})