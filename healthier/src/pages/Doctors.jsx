import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '../features/Actions/actions'

import Pagination from '../Components/Ui Elements/Pagination'
import Navigation from '../Components/Nav'
import LoadingDoctors from '../Components/Ui Elements/loading/Doctors'
import Branch from './Branches'

function Doctors() {
    const [loading, setLoading] = useState(false);
    const [Doctors, setDoctors] = useState([]);
    const dispatch = useDispatch()
    // load Data
    useEffect(() => {

        const loadDoctors = async () => {

            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);

            // Await make wait until that 

            // promise settles and return its reult
            await dispatch(getDoctors())


                // After fetching data stored it in posts state.
                ;

            // Closed the loading page
            setLoading(false);
        }

        // Call the function
        loadDoctors();
    }, []);
    // Getting Data from redux Store
    const Docs = useSelector(state => state.Reducers.Doctors)
    return (
        <div className='dark:bg-gray-900 '>
            <Navigation />
                <Link to=''><h1 className='text-4xl dark:text-white ml-5 mt-8 hover:text-green-500'>List Doctors by Commune...</h1></Link>
                {/* <Communes/> */}
                <Link to=''><h1 className='text-4xl dark:text-white ml-10 mt-8 hover:text-green-500'>List Doctors by Branch...</h1></Link>
                <Branch/>
            {/* Doctors List */}
            {loading ?
                //loading 
                    <LoadingDoctors/>
                :
                //loaded
                <div>
                    <h1 className='text-4xl dark:text-white pl-5 mt-8'>List of all Doctors :</h1>
                    <div className='flex flex-wrap  dark:bg-gray-900 text-gray-600 dark:text-gray-400 m-16' >
                        {Docs.map(Doctor => {
                            return (
                                <div className='flex bg-green-500 dark:bg-gray-800  m-5 w-96 shadow-lg h-40' key={Doctor._id}>
                                    <img src={Doctor.imageLink} className='w-40 h-40 rounded-lg' />
                                    <div>
                                        <Link to={`/Doctors/${Doctor._id}`}><h1 className="text-3xl mx-4 dark:hover:text-green-500 hover:text-white">{Doctor.Name}</h1></Link>
                                        <h2 className="text-xl mx-4 dark:hover:text-green-500 hover:text-white pt-3">{Doctor.Speciality}</h2>
                                        <h2 className='mx-4 dark:hover:text-green-500 hover:text-white pt-2'>{Doctor.Commune}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                }
            {/* pagination */}
            <Pagination/>
        </div>
    )
}

export default Doctors
