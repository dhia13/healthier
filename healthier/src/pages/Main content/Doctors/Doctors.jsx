import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '../../../features/Actions/DoctorActions'
import DoctorList from './Components/doctorsList'
import Navigation from '../../../Components/Nav'
import LoadingDoctors from './Components/LoadingDoctors'
import FilterListByCommune from './Components/filterByCommune'
import FilterListByBranche from './Components/filterByBranche'


function Doctors() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    // Doctors Logic
    const Docs = useSelector(state => state.DoctorReducer.Doctors)
    const Commune = useSelector(state=>state.InterfaceReducer.Parameters.SearchCommun)
    useEffect(() => {
        const loadDoctors = async () => {
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true)
            // promise settles and return its reult
            if(Commune){
            await dispatch(getDoctors(Commune))
            }else{
            await dispatch(getDoctors())
            }
            // Closed the loading page
            setLoading(false);
        }
        // Call the function
        loadDoctors();
    }, [Commune]);
    // Commune Menu Logic

    return (
        <div className='dark:bg-UiDarkBg bg-cyan-50'>
            <Navigation />
            {/* <Filtration> */}
            <div className='flex'>
            <FilterListByCommune/>
            <FilterListByBranche />
            </div>
            {/* Commune */}
            <div>
            </div>
            {/* Main */}
            {/* Doctors List */}
            {loading ?
                //loading 
                <LoadingDoctors />
                :
                //loaded
                <DoctorList Docs={Docs} />
            }
        </div>
    )
}

export default Doctors
