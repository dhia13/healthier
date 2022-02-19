import { CHANGE_SEARCH_COMMUNE,CHANGE_SEARCH_WORD,CHANGE_SEARCH_BRANCHE,SHOW_COMMUNE,HIDE_COMMUNE} from '../Types'
import axios from 'axios'


export const ChangeSearchWord = (SearchWord) =>dispatch=>{
    dispatch({
        type:CHANGE_SEARCH_WORD,
        payload:SearchWord
    })
}
export const ChangeSearchBranche = (SearchBranche) =>dispatch=>{
    dispatch({
        type:CHANGE_SEARCH_BRANCHE,
        payload:SearchBranche
    })
}
export const changeDisplay = (a) =>dispatch=>{
    dispatch({
        type:SHOW_COMMUNE,
        payload:a
    })
}
export const hideDisplay =(a)=>dispatch=>{
    dispatch({
        type:HIDE_COMMUNE,
        payload:a
    })
}
export const ChangeCommuneSearch =(e)=>dispatch=>{
    dispatch({
        type:CHANGE_SEARCH_COMMUNE,
        payload:e
    })
}